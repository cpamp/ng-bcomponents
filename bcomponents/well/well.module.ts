import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {WellBComponent, WellBDirective} from './well.bcomponent';

var directives = [
    WellBComponent,
    WellBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class WellModule {}