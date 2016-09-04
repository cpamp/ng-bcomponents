import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AttributesModule} from '../attributes.module';
import {InputGroupBComponent} from './input-group.bcomponent';
import {ButtonModule} from '../button/button.module';

@NgModule({
    imports: [BrowserModule, FormsModule, AttributesModule, ButtonModule],
    declarations: [InputGroupBComponent],
    exports: [InputGroupBComponent]
})
export class InputGroupModule {}