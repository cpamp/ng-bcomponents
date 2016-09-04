import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {TableBComponent} from './table.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [TableBComponent],
    exports: [TableBComponent]
})
export class TableModule {}