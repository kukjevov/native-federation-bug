import {Component, ChangeDetectionStrategy, InputSignal, input, Inject, Optional, OnInit, OnDestroy} from '@angular/core';
import {Authorize, ComponentRouteAuthorized} from '@anglr/authentication';
import {withBasicComponents} from '@anglr/dynamic/basic-components';
import {LAYOUT_HISTORY_MANAGER, LayoutEditorComponent, withLayoutEditor} from '@anglr/dynamic/layout-editor';
import {EDITOR_METADATA_MANAGER, EditorHotkeys, EditorMetadataManager, MetadataHistoryManager, provideDynamic, withEditorHotkeys} from '@anglr/dynamic';
import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {FirstUppercaseLocalizePipe, TooltipDirective} from '@anglr/common';
import {DebugDataCopyClickModule} from '@anglr/common/material';
import {lastValueFrom} from '@jscrpt/common/rxjs';
import {Subscription} from 'rxjs';

import {withDashboardComponents} from '../../../dynamicItemsDashboard';
import {BackButtonComponent} from '../../../components';
import {homeResolver} from '../home/home.resolver';
import {DynamicContentResponse, DynamicContentService} from '../../../services/api/dynamicContent';
import {DASHBOARD_DYNAMIC_CONTENT} from '../../../misc/constants';
import {MonthSelectionService} from '../../../services/monthSelection';

/**
 * Home customization component
 */
@Component(
{
    selector: 'home-customization-view',
    templateUrl: 'homeCustomization.component.html',
    styleUrl: 'homeCustomization.component.scss',
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
        DebugDataCopyClickModule,
        LayoutEditorComponent,
        BackButtonComponent,
        TooltipDirective,
    ],
    providers:
    [
        MonthSelectionService,
        provideDynamic(withLayoutEditor(),
                       withEditorHotkeys(),
                       withBasicComponents(),
                       withDashboardComponents(),),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'customize', resolve: {layoutData: homeResolver}, providers: [DynamicContentService]})
@Authorize('home-page')
export class HomeCustomizationComponent implements OnInit, OnDestroy
{
    /**
     * Subscriptions created during initialization
     */
    private _initSubscriptions: Subscription = new Subscription();

    //######################### public properties - inputs #########################

    /**
     * Layout data to be editted
     */
    public layoutData: InputSignal<DynamicContentResponse> = input.required<DynamicContentResponse>();

    //######################### constructor #########################
    constructor(private _dynamicContentSvc: DynamicContentService,
                @Inject(EDITOR_METADATA_MANAGER) private _metaManager: EditorMetadataManager<LayoutComponentMetadata>,
                @Inject(LAYOUT_HISTORY_MANAGER) protected history: MetadataHistoryManager,
                @Optional() private _hotkeys?: EditorHotkeys,)
    {
    }

    //######################### public methods - implementation of OnInit #########################

    /**
     * @inheritdoc
     */
    public ngOnInit(): void
    {
        if(this._hotkeys)
        {
            this._initSubscriptions.add(this._hotkeys.save.subscribe(() => this.save()));
            this._initSubscriptions.add(this._hotkeys.undo.subscribe(() => this.history.undo()));
            this._initSubscriptions.add(this._hotkeys.redo.subscribe(() => this.history.redo()));
        }
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * @inheritdoc
     */
    public ngOnDestroy(): void
    {
        this._initSubscriptions.unsubscribe();
    }

    //######################### protected methods - template bindings #########################

    /**
     * Saves current layout metadata
     */
    protected async save(): Promise<void>
    {
        const metadata = this._metaManager.getMetadata();

        if(!metadata)
        {
            throw new Error('HomeCustomizationComponent: missing metadata to be saved!');
        }

        await lastValueFrom(this._dynamicContentSvc.setDynamicContent(DASHBOARD_DYNAMIC_CONTENT, metadata));
    }
}
