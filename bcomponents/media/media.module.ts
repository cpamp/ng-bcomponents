import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {MediaBComponent} from './media.bcomponent';
import {HeadingModule} from '../heading/heading.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: [MediaBComponent],
    exports: [MediaBComponent]
})
export class MediaModule {}