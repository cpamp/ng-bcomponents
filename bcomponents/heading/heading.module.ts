import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {HeadingBComponent} from './heading.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [HeadingBComponent],
    exports: [HeadingBComponent]
})
export class HeadingModule {}