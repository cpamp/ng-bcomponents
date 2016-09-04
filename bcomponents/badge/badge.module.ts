import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BadgeBComponent} from './badge.bcomponent';
import {AttributesModule} from '../attributes.module';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [BadgeBComponent],
    exports: [BadgeBComponent]
})
export class BadgeModule {}