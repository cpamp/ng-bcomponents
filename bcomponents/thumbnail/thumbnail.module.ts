import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ThumbnailBComponent, ThumbnailBDirective} from './thumbnail.bcomponent';
import {HeadingModule} from '../heading/heading.module';

var directives = [
    ThumbnailBComponent,
    ThumbnailBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: directives,
    exports: directives
})
export class ThumbnailModule {}