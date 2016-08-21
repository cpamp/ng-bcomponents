import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "button-bcomponent",
    templateUrl: "button.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'type', 'click'])
})
export class ButtonBComponent extends BComponent {
    public text: string;
    public type: DisplayType;
    public click: () => void;

    constructor(text: string = "", type: DisplayType = "default", click: () => void = (() => {})) {
        super("btn btn-default");
        this.text = text;
        this.type = type;
        this.click = click;
    }

    ngOnChildChanges = () => {
        this.baseClass = "btn btn-" + this.type;
    }

    public onClick = () => {
        if(this.click != null) this.click();
    }
}