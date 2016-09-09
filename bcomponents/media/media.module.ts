import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {MediaBComponent, MediaBDirective} from './media.bcomponent';
import {HeadingModule} from '../heading/heading.module';

var directives = [
    MediaBComponent,
    MediaBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: directives,
    exports: directives
})
export class MediaModule {}