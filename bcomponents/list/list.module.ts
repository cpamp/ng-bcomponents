import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ListBComponent, ListBDirective} from './list.bcomponent';
import {ListItemBDirective, ListItemBComponent, ListItemActiveDirective} from './list-item.bcomponent';
import {BadgeModule} from '../badge/badge.module';

var directives = [
    ListBComponent,
    ListBDirective,
    ListItemBDirective,
    ListItemBComponent,
    ListItemActiveDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, BadgeModule, RouterModule],
    declarations: directives,
    exports: directives
})
export class ListModule {}