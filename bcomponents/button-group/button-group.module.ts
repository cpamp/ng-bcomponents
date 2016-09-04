import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttributesModule} from '../attributes.module';
import {ButtonGroupBComponent} from './button-group.bcomponent';
import {ButtonModule} from '../button/button.module';

@NgModule({
    imports: [BrowserModule, AttributesModule, ButtonModule],
    declarations: [ButtonGroupBComponent],
    exports: [ButtonGroupBComponent]
})
export class ButtonGroupModule {}