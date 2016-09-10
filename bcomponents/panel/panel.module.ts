import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {PanelBComponent, PanelBDirective} from './panel.bcomponent';

var directives = [
    PanelBComponent,
    PanelBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class PanelModule {}