import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BComponentAttributes} from './bcomponent';

@NgModule({
    imports: [BrowserModule],
    declarations: [BComponentAttributes],
    exports: [BComponentAttributes]
})
export class AttributesModule {}