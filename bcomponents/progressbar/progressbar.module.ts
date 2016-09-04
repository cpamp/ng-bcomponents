import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ProgressbarBComponent} from './progressbar.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [ProgressbarBComponent],
    exports: [ProgressbarBComponent]
})
export class ProgressbarModule {}