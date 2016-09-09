import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {DropdownBComponent, DropdownBDirective} from './dropdown.bcomponent';
import {LinkModule} from '../link/link.module';

var directives = [
    DropdownBComponent,
    DropdownBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, LinkModule],
    declarations: directives,
    exports: directives
})
export class DropdownModule {}