import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {LinkBComponent, LinkBDirective} from './link.bcomponent';

var directives = [
    LinkBComponent,
    LinkBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, RouterModule],
    declarations: directives,
    exports: directives
})
export class LinkModule {}