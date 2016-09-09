import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

export class HeadingBase extends BComponent{
    @Input() title: string;
    @Input() subtitle: string;
    @Input() size: number = 1;

    constructor(el: ElementRef = void 0) {
        super("page-header", el);
    }

    public Initialize = (title: string = "", subtitle: string = "", size: number = 1): this => {
        this.title = title;
        this.subtitle = subtitle;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        if(this.size == null) {
            this.size = 1;
        }
    }
}

@Component({
    selector: 'bc-heading',
    templateUrl: 'heading.bcomponent.html',
    inputs: BComponentInputs
})
export class HeadingBComponent extends HeadingBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-heading]',
    inputs: BComponentInputs
})
export class HeadingBDirective extends HeadingBase {
    constructor(el: ElementRef) { super(el); }
}