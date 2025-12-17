import {Component, ChangeDetectionStrategy} from '@angular/core';
import {HostDisplayBlockStyle} from '@anglr/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';

import {UserSelectorComponentOptions} from './userSelector.options';
import {UserSelectorLayoutMetadataLoader} from './userSelector.metadata';

/**
 * Component used for displaying user selector
 */
@Component(
{
    selector: 'user-selector',
    templateUrl: 'userSelector.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(UserSelectorLayoutMetadataLoader)
export class UserSelectorComponent extends LayoutComponentBase<UserSelectorComponentOptions> implements LayoutComponent<UserSelectorComponentOptions>
{
}