import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

export class BreadcrumbItem {
    public link: string;
    public text: string;

    constructor(link: string, text: string) {
        this.link = link;
        this.text = text;
    }
}

@Component({
    selector: 'breadcrumb-bcomponent',
    templateUrl: 'breadcrumb.bcomponent.html',
    directives: [BComponentAttributes, LinkBComponent],
    inputs: BComponentInputs.concat('items', 'active')
})
export class BreadcrumbBComponent extends BComponent {
    public items: BreadcrumbItem[];
    public active: string;

    constructor() {
        super("breadcrumb");
    }
}