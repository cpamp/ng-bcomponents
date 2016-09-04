import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {DropdownBComponent} from './dropdown.bcomponent';
import {LinkModule} from '../link/link.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, LinkModule],
    declarations: [DropdownBComponent],
    exports: [DropdownBComponent]
})
export class DropdownModule {}