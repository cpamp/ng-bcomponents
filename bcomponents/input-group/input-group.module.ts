import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AttributesModule} from '../attributes.module';
import {InputGroupBComponent, InputGroupBDirective} from './input-group.bcomponent';
import {ButtonModule} from '../button/button.module';

var directives = [
    InputGroupBComponent,
    InputGroupBDirective
];

@NgModule({
    imports: [BrowserModule, FormsModule, AttributesModule, ButtonModule],
    declarations: directives,
    exports: directives
})
export class InputGroupModule {}