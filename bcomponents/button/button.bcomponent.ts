import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "bc-button",
    templateUrl: "button.bcomponent.html",
    inputs: BComponentInputs
})
export class ButtonBComponent extends BComponent {
    @Input() text: string;
    @Input() type: DisplayType = "default";
    @Input() click: () => void;

    @Output() onClick: EventEmitter<ButtonBComponent> = new EventEmitter<ButtonBComponent>();

    constructor() {
        super("btn btn-default");
    }

    public Initialize = (text: string = "", type: DisplayType = "default", click: () => void = (() => {})): ButtonBComponent => {
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