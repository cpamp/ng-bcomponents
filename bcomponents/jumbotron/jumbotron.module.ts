import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {JumbotronBComponent} from './jumbotron.bcomponent';
import {HeadingModule} from '../heading/heading.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, HeadingModule],
    declarations: [JumbotronBComponent],
    exports: [JumbotronBComponent]
})
export class JumbotronModule {}