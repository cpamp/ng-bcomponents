import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ProgressbarBComponent, ProgressbarBDirective} from './progressbar.bcomponent';

var directives = [
    ProgressbarBComponent,
    ProgressbarBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class ProgressbarModule {}