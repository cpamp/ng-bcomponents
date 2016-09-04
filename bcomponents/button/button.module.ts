import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ButtonBComponent} from './button.bcomponent';

@NgModule({
    imports: [BrowserModule, AttributesModule],
    declarations: [ButtonBComponent],
    exports: [ButtonBComponent]
})
export class ButtonModule {}