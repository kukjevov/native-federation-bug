import {Component, ChangeDetectionStrategy} from '@angular/core';
import {HostDisplayBlockStyle} from '@anglr/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';

import {MonthOverviewComponentOptions} from './monthOverview.options';
import {MonthOverviewLayoutMetadataLoader} from './monthOverview.metadata';

/**
 * Component used for displaying month overview
 */
@Component(
{
    selector: 'month-overview',
    templateUrl: 'monthOverview.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(MonthOverviewLayoutMetadataLoader)
export class MonthOverviewComponent extends LayoutComponentBase<MonthOverviewComponentOptions> implements LayoutComponent<MonthOverviewComponentOptions>
{
}