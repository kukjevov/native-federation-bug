import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DebugDataCopyClickModule} from '@anglr/common/material';
import {withBasicComponents} from '@anglr/dynamic/basic-components';
import {LayoutComponentRendererDirective, withLayoutRuntime} from '@anglr/dynamic/layout';
import {provideDynamic} from '@anglr/dynamic';
import {FirstUppercaseLocalizePipe, TooltipDirective, WithFullscreenContentCssClass} from '@anglr/common';
import {Authorize, ComponentRouteAuthorized} from '@anglr/authentication';
import {NgScrollbarModule} from 'ngx-scrollbar';

import {withDashboardComponents} from '../../../dynamicItemsDashboard';
import {homeResolver} from './home.resolver';
import {DynamicContentResponse, DynamicContentService} from '../../../services/api/dynamicContent';
import {MonthSelectionService} from '../../../services/monthSelection';

/**
 * Home component
 */
@Component(
{
    selector: 'home-view',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    standalone: true,
    imports:
    [
        LayoutComponentRendererDirective,
        FirstUppercaseLocalizePipe,
        DebugDataCopyClickModule,
        NgScrollbarModule,
        TooltipDirective,
        RouterLink,
    ],
    providers:
    [
        MonthSelectionService,
        provideDynamic(withLayoutRuntime(),
                       withBasicComponents(),
                       withDashboardComponents(),),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: '', resolve: {layoutData: homeResolver}, providers: [DynamicContentService]})
@Authorize('home-page')
@WithFullscreenContentCssClass()
export class HomeComponent
{
    //######################### public properties - inputs #########################

    /**
     * Layout data to be displayed
     */
    public layoutData: InputSignal<DynamicContentResponse> = input.required<DynamicContentResponse>();
}
