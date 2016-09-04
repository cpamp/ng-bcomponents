import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {BlockquoteBComponent} from './blockquote.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [BlockquoteBComponent],
    exports: [BlockquoteBComponent]
})
export class BlockquoteModule {}