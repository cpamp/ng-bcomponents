import {NgModule} from '@angular/core';
import {CollapseBDirective, CollapsibleBDirective} from './collapse.bdirective';

var directives = [
    CollapseBDirective,
    CollapsibleBDirective
];

@NgModule({
    declarations: directives,
    exports: directives
})
export class CollapseModule {}