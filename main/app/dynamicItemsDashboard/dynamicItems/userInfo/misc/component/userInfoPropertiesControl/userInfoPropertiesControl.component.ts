import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PropertiesControl, PropertiesControlBase} from '@anglr/dynamic/layout-editor';
import {FirstUppercaseLocalizePipe, TooltipDirective} from '@anglr/common';
import {NgSelectModule} from '@anglr/select';
import {Subscription} from 'rxjs';

import {UserInfoComponentOptions} from '../../../userInfo.options';

/**
 * Component used for editation of user info displayed properties
 */
@Component(
{
    selector: 'user-info-properties-control',
    templateUrl: 'userInfoPropertiesControl.component.html',
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
        ReactiveFormsModule,
        TooltipDirective,
        NgSelectModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoPropertiesControlComponent extends PropertiesControlBase<UserInfoComponentOptions> implements PropertiesControl<UserInfoComponentOptions>
{
    //######################### private fields #########################

    /**
     * Subscriptions created during initialization
     */
    private _initSubscriptions: Subscription = new Subscription();

    //######################### protected properties - template bindings #########################

    /**
     * User info properties form
     */
    protected userInfoPropertiesForm: FormControl<(keyof UserInfoComponentOptions)[]> = new FormControl<(keyof UserInfoComponentOptions)[]>([], {nonNullable: true});

    /**
     * Array of values that are available
     */
    protected values: (keyof UserInfoComponentOptions)[] = [];

    //######################### public methods - overrides #########################

    public override async initialize(): Promise<void>
    {
        if(!this.form)
        {
            throw new Error('UserInfoPropertiesControlComponent: form is not set!');
        }
        
        this.values = Object.keys(this.form.controls) as (keyof UserInfoComponentOptions)[];
        const values: (keyof UserInfoComponentOptions)[] = [];

        for(const val of this.values)
        {
            if(this.form.value[val] ?? false)
            {
                values.push(val);
            }
        }

        this.userInfoPropertiesForm.setValue(values);

        this._initSubscriptions.add(this.userInfoPropertiesForm.valueChanges.subscribe(value => 
        {
            const newValue: Partial<UserInfoComponentOptions> = {};

            for(const val of this.values)
            {
                newValue[val] = value.some(itm => val == itm);
            }

            this.form?.patchValue(newValue);
        }));
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * @inheritdoc
     */
    public ngOnDestroy(): void
    {
        this._initSubscriptions.unsubscribe();
    }
}
