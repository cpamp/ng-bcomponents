import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ModalBComponent} from './modal.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [ModalBComponent],
    exports: [ModalBComponent]
})
export class ModalModule {}