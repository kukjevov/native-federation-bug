import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FirstUppercaseLocalizePipe, HostDisplayBlockStyle} from '@anglr/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';

import {DochadzkaSubmenuComponentOptions} from './dochadzkaSubmenu.options';
import {DochadzkaSubmenuLayoutMetadataLoader} from './dochadzkaSubmenu.metadata';

/**
 * Component used for displaying dochadzka submenu
 */
@Component(
{
    selector: 'dochadzka-submenu',
    templateUrl: 'dochadzkaSubmenu.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(DochadzkaSubmenuLayoutMetadataLoader)
export class DochadzkaSubmenuComponent extends LayoutComponentBase<DochadzkaSubmenuComponentOptions> implements LayoutComponent<DochadzkaSubmenuComponentOptions>
{
}