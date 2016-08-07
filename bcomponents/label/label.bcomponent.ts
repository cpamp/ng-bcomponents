import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "label-bcomponent",
    templateUrl: "label.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'type'])
})
export class LabelBComponent extends BComponent {
    public text: string;
    public type: DisplayType = "default";

    constructor() {
        super("label label-default");
    }

    ngOnChildChanges = () => {
        this.baseClass = "label label-" + this.type;
    }
}