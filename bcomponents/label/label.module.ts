import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {LabelBComponent, LabelBDirective} from './label.bcomponent';

var directives = [
    LabelBComponent,
    LabelBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class LabelModule {}