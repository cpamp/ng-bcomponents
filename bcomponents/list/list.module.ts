import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ListBComponent} from './list.bcomponent';
import {ListItemDirective, ListItemBComponent, ListItemActiveDirective} from './list-item.bcomponent';
import {BadgeModule} from '../badge/badge.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, BadgeModule, RouterModule],
    declarations: [ListBComponent, ListItemDirective, ListItemBComponent, ListItemActiveDirective],
    exports: [ListBComponent, ListItemDirective, ListItemBComponent, ListItemActiveDirective]
})
export class ListModule {}