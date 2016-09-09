import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {BreadcrumbBComponent, BreadcrumbBDirective} from './breadcrumb.bcomponent';
import {LinkModule} from '../link/link.module';

var directives = [
    BreadcrumbBComponent,
    BreadcrumbBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, LinkModule],
    declarations: directives,
    exports: directives
})
export class BreadcrumbModule {}