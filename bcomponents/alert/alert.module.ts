import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AlertBComponent, AlertBDirective} from './alert.bcomponent';
import {AttributesModule} from '../attributes.module';

var directives = [
    AlertBComponent,
    AlertBDirective
]

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class AlertModule {}