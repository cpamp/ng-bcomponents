import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

@Component({
    selector: 'breadcrumb-bcomponent',
    templateUrl: 'breadcrumb.bcomponent.html',
    directives: [BComponentAttributes, LinkBComponent],
    inputs: BComponentInputs.concat('items', 'active')
})
export class BreadcrumbBComponent extends BComponent {
    public items: LinkBComponent[];
    public active: string;

    constructor() {
        super("breadcrumb");
    }
}