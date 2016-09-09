import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {BlockquoteBComponent, BlockquoteBDirective} from './blockquote.bcomponent';

var directives = [
    BlockquoteBComponent,
    BlockquoteBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class BlockquoteModule {}