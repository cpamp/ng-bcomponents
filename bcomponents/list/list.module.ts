import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ListBComponent} from './list.bcomponent';
import {ListItemBComponentAttribute, ListItemBComponentTag} from './list-item.bcomponent';
import {BadgeModule} from '../badge/badge.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, BadgeModule, RouterModule],
    declarations: [ListBComponent, ListItemBComponentAttribute, ListItemBComponentTag],
    exports: [ListBComponent, ListItemBComponentAttribute, ListItemBComponentTag]
})
export class ListModule {}