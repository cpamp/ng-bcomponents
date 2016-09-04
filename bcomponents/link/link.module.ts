import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {LinkBComponent} from './link.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule, RouterModule],
    declarations: [LinkBComponent],
    exports: [LinkBComponent]
})
export class LinkModule {}