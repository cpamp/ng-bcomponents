import {Directive, Input, HostBinding, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';

export class ListItemBComponentBase extends BComponent {
    private el: ElementRef;

    constructor(el: ElementRef) {
        super('list-group-item');
        this.el = el;
    }

    private setAttributes = () => {
        new BComponentAttributes(this.el).setAttributes(this.self);
    }

    ngOnChildInit = () => {
        this.setAttributes();
    }

    ngOnChildChanges = () => {
        this.setAttributes();
    }
}

@Directive({selector: 'bc-active'})
export class ListItemActiveDirective {
    @HostBinding('class.active') classActive: boolean = true;
}

@Directive({
    selector: 'bc-list-item',
    inputs: [...BComponentInputs]
})
export class ListItemBComponentTag extends ListItemBComponentBase {
    constructor(el: ElementRef) {
        super(el);
    }
}

@Directive({
    selector: '[bc-list-item]',
    inputs: [...BComponentInputs]
})
export class ListItemBComponentAttribute extends ListItemBComponentBase {
    constructor(el: ElementRef) {
        super(el);
    }
}