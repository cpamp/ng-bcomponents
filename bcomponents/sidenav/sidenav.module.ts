import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {SidenavBComponent} from './sidenav.bcomponent';
import {LinkModule} from '../link/link.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, LinkModule],
    declarations: [SidenavBComponent],
    exports: [SidenavBComponent]
})
export class SidenavModule {}