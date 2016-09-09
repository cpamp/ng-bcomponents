import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ButtonGroupBComponent, ButtonGroupBDirective} from './button-group.bcomponent';
import {ButtonModule} from '../button/button.module';

var directives = [
    ButtonGroupBComponent,
    ButtonGroupBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, ButtonModule],
    declarations: directives,
    exports: directives
})
export class ButtonGroupModule {}