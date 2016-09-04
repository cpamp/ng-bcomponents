import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {BreadcrumbBComponent} from './breadcrumb.bcomponent';
import {LinkModule} from '../link/link.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, LinkModule],
    declarations: [BreadcrumbBComponent],
    exports: [BreadcrumbBComponent]
})
export class BreadcrumbModule {}