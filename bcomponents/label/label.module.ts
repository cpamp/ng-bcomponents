import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {LabelBComponent} from './label.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [LabelBComponent],
    exports: [LabelBComponent]
})
export class LabelModule {}