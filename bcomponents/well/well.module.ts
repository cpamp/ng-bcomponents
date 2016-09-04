import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {WellBComponent} from './well.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [WellBComponent],
    exports: [WellBComponent]
})
export class WellModule {}