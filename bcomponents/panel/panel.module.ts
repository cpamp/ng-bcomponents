import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {PanelBComponent} from './panel.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [PanelBComponent],
    exports: [PanelBComponent]
})
export class PanelModule {}