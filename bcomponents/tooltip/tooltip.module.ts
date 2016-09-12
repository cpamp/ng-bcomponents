import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TooltipBDirective} from './tooltip.bdirective';

var directives = [
    TooltipBDirective
];

@NgModule({
    imports: [BrowserModule],
    declarations: directives,
    exports: directives
})
export class TooltipModule {}