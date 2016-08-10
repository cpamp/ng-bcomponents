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
    public type: DisplayType = "default";
    public click: () => void;

    constructor() {
        super("btn btn-default");
    }

    ngOnChildChanges = () => {
        this.baseClass = "btn btn-" + this.type;
    }

    public onClick = () => {
        if(this.click != null) this.click();
    }
}