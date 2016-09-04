import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AlertBComponent} from './alert.bcomponent';
import {AttributesModule} from '../attributes.module';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [AlertBComponent],
    exports: [AlertBComponent]
})
export class AlertModule {}