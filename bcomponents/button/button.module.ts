import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ButtonBComponent, ButtonBDirective} from './button.bcomponent';

var directives = [
    ButtonBComponent,
    ButtonBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class ButtonModule {}