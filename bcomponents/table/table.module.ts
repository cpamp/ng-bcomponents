import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {TableBComponent, TableBDirective} from './table.bcomponent';

var directives = [
    TableBComponent,
    TableBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class TableModule {}