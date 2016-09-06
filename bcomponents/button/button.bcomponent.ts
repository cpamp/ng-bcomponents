import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "button-bcomponent",
    templateUrl: "button.bcomponent.html",
    inputs: BComponentInputs
})
export class ButtonBComponent extends BComponent {
    @Input() text: string;
    @Input() type: DisplayType = "default";
    @Input() onClick: () => void;

    @Output() click: EventEmitter<ButtonBComponent> = new EventEmitter<ButtonBComponent>();

    constructor() {
        super("btn btn-default");
    }

    public Initialize = (text: string = "", type: DisplayType = "default", onClick: () => void = (() => {})): ButtonBComponent => {
        this.text = text;
        this.type = type;
        this.onClick = onClick;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "btn btn-" + this.type;
    }

    public clickEvent = () => {
        if(this.onClick != null) {this.onClick();}
        this.click.emit(this);
    }
}