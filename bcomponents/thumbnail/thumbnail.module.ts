import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ThumbnailBComponent} from './thumbnail.bcomponent';
import {HeadingModule} from '../heading/heading.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: [ThumbnailBComponent],
    exports: [ThumbnailBComponent]
})
export class ThumbnailModule {}