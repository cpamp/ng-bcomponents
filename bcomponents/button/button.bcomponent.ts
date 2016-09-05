import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "button-bcomponent",
    templateUrl: "button.bcomponent.html",
    inputs: BComponentInputs
})
export class ButtonBComponent extends BComponent {
    @Input() text: string;
    @Input() type: DisplayType = "default";
    @Input() click: () => void;

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

    public onClick = () => {
        if(this.click != null) this.click();
    }
}