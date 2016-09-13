import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PopoverBDirective} from './popover.bdirective';

var directives = [
    PopoverBDirective
];

@NgModule({
    imports: [BrowserModule],
    declarations: directives,
    exports: directives
})
export class PopoverModule {}