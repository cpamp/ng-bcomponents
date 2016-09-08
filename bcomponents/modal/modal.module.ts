import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ModalBComponent, ModalBodyBComponentDirective, ModalFooterBComponentDirective, ModalTitleBComponentDirective} from './modal.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [ModalBComponent, ModalBodyBComponentDirective, ModalFooterBComponentDirective, ModalTitleBComponentDirective],
    exports: [ModalBComponent, ModalBodyBComponentDirective, ModalFooterBComponentDirective, ModalTitleBComponentDirective]
})
export class ModalModule {}