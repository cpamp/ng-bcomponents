import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ModalBComponent, ModalBDirective, ModalBodyBComponentDirective, ModalFooterBComponentDirective, ModalTitleBComponentDirective} from './modal.bcomponent';

var directives = [
    ModalBComponent,
    ModalBDirective,
    ModalBodyBComponentDirective,
    ModalFooterBComponentDirective,
    ModalTitleBComponentDirective
];

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: directives,
    exports: directives
})
export class ModalModule {}