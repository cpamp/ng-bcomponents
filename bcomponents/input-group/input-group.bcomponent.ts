import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType, DisplaySize} from '../bcomponent';
import {ButtonBComponent} from '../button/button.bcomponent';

export class InputGroupBase extends BComponent {
    @Input() placeholder: string;
    @Input() model: string;
    @Input() size: DisplaySize;
    @Input() frontText: string;
    @Input() backText: string;
    @Input() frontButton: ButtonBComponent;
    @Input() backButton: ButtonBComponent;

    public groupClass: string;

    constructor(el: ElementRef = void 0) {
        super("form-control", el);
    }

    public Initialize = (placeholder: string = "", model: string = "", size: DisplaySize = null, frontText: string = null, backText: string = null, frontButton: ButtonBComponent = null, backButton: ButtonBComponent = null): this => {
        this.placeholder = placeholder;
        this.model = model;
        this.size = size;
        this.frontText = frontText;
        this.backText = backText;
        this.frontButton = frontButton;
        this.backButton = backButton;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.groupClass = "input-group";
        if(!this.isNull(this.size)) {
            this.groupClass += " input-group-" + this.size;
        }
    }
}

@Component({
    selector: "bc-input-group",
    templateUrl: "input-group.bcomponent.html",
    inputs: BComponentInputs
})
export class InputGroupBComponent extends InputGroupBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-input-group]",
    inputs: BComponentInputs
})
export class InputGroupBDirective extends InputGroupBase {
    constructor(el: ElementRef) { super(el); }
}