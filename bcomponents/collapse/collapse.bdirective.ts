import {Directive, Input, ElementRef} from '@angular/core';
import {BDirective} from '../bcomponent';

@Directive({selector:'[bc-collapse]'})
export class CollapseBDirective extends BDirective {
    @Input('bc-collapse') target: string;

    constructor(el: ElementRef) {
        super(el);
    }

    ngAfterViewInit() {
        this.setAttribute('data-toggle', 'collapse');
        this.setAttribute('data-target', this.target);
        this.addStyle('cursor', 'pointer');
    }
}

@Directive({selector:'[bc-collapsible]'})
export class CollapsibleBDirective extends BDirective {
    constructor(el: ElementRef) {
        super(el);
    }

    ngAfterViewInit() {
        this.addClass('collapse');
    }
}