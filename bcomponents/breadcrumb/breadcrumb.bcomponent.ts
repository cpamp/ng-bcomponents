import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

@Component({
    selector: 'bc-breadcrumb',
    templateUrl: 'breadcrumb.bcomponent.html',
    inputs: BComponentInputs
})
export class BreadcrumbBComponent extends BComponent {
    @Input() items: LinkBComponent[];
    @Input() active: string;

    constructor() {
        super("breadcrumb");
    }

    public Initialize = (items: LinkBComponent[] = null, active: string = null): BreadcrumbBComponent => {
        this.items = items;
        this.active = active;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}