import {Component, Directive, Input, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

export class BreadcrumbBase extends BComponent {
    @Input() items: LinkBComponent[];
    @Input() active: string;

    constructor(el: ElementRef = void 0) {
        super("breadcrumb");
    }

    public Initialize = (items: LinkBComponent[] = null, active: string = null): this => {
        this.items = items;
        this.active = active;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}

@Component({
    selector: 'bc-breadcrumb',
    templateUrl: 'breadcrumb.bcomponent.html',
    inputs: BComponentInputs
})
export class BreadcrumbBComponent extends BreadcrumbBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-breadcrumb]',
    inputs: BComponentInputs
})
export class BreadcrumbBDirective extends BreadcrumbBase {
    constructor(el: ElementRef) { super(el); }
}