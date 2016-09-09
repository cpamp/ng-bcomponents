import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

export class LabelBase extends BComponent {
    @Input() text: string;
    @Input() type: DisplayType = "default";

    constructor(el: ElementRef = void 0) {
        super("label label-default", el);
    }

    public Initialize = (text: string = "", type: DisplayType = "default"): this => {
        this.text = text;
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "label label-" + this.type;
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }
}

@Component({
    selector: "bc-label",
    templateUrl: "label.bcomponent.html",
    inputs: BComponentInputs
})
export class LabelBComponent extends LabelBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-label]",
    inputs: BComponentInputs
})
export class LabelBDirective extends LabelBase {
    constructor(el: ElementRef) { super(el); }
}