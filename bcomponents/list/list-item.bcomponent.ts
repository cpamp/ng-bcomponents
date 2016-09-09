import {Directive, Input, HostBinding, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';

export class ListItemBase extends BComponent {
    constructor(el: ElementRef) {
        super('list-group-item', el);
    }
}

@Directive({selector: '[bc-active]'})
export class ListItemActiveDirective {
    @HostBinding('class.active') classActive: boolean = true;
}

@Directive({
    selector: 'bc-list-item',
    inputs: BComponentInputs
})
export class ListItemBComponent extends ListItemBase {
    constructor(el: ElementRef) {
        super(el);
    }
}

@Directive({
    selector: '[bc-list-item]',
    inputs: BComponentInputs
})
export class ListItemDirective extends ListItemBase {
    constructor(el: ElementRef) {
        super(el);
    }
}