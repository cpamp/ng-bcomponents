import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ListGroupBComponent} from './list-group.bcomponent';
import {BadgeModule} from '../badge/badge.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, BadgeModule],
    declarations: [ListGroupBComponent],
    exports: [ListGroupBComponent]
})
export class ListGroupModule {}