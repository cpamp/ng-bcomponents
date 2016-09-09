import {Component, Directive, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

export class ButtonBase extends BComponent {
    @Input() text: string;
    @Input() type: DisplayType = "default";
    @Input() click: () => void;

    @Output() onClick: EventEmitter<this> = new EventEmitter<this>();

    constructor(el: ElementRef = void 0) {
        super("btn btn-default", el);
    }

    public Initialize = (text: string = "", type: DisplayType = "default", click: () => void = (() => {})): this => {
        this.text = text;
        this.type = type;
        this.click = click;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "btn btn-" + this.type;
    }

    public clickEvent = () => {
        if(this.click != null) {this.click();}
        this.onClick.emit(this);
    }
}

@Component({
    selector: "bc-button",
    templateUrl: "button.bcomponent.html",
    inputs: BComponentInputs
})
export class ButtonBComponent extends ButtonBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-button]",
    inputs: BComponentInputs
})
export class ButtonBDirective extends ButtonBase {
    constructor(el: ElementRef) { super(el); }
}