import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {JumbotronBComponent, JumbotronBDirective} from './jumbotron.bcomponent';
import {HeadingModule} from '../heading/heading.module';

var directives = [
    JumbotronBComponent,
    JumbotronBDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: directives,
    exports: directives
})
export class JumbotronModule {}