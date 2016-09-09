import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BadgeBComponent, BadgeBDirective} from './badge.bcomponent';
import {AttributesModule} from '../attributes.module';

var directives = [
    BadgeBComponent,
    BadgeBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class BadgeModule {}