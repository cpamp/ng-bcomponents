import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplaySize} from '../bcomponent';

export class WellBase extends BComponent {
    @Input() text: string;
    @Input() size: DisplaySize;

    constructor(el: ElementRef = void 0) {
        super("well");
    }

    public Initialize = (text: string = "", size: DisplaySize = null): this => {
        this.text = text;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        if(this.size !== null) {
            this.baseClass = "well well-" + this.size;
        }
    }

    public hasText = ():boolean => {
        return !this.isNull(this.text);
    }
}

@Component({
    selector: "bc-well",
    templateUrl: "well.bcomponent.html",
    inputs: BComponentInputs
})
export class WellBComponent extends WellBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-well]",
    inputs: BComponentInputs
})
export class WellBDirective extends WellBase {
    constructor(el: ElementRef) { super(el); }
}