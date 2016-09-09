import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {HeadingBComponent, HeadingBDirective} from './heading.bcomponent';

var directives = [
    HeadingBComponent,
    HeadingBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class HeadingModule {}