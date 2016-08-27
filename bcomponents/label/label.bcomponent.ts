import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "label-bcomponent",
    templateUrl: "label.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['type'])
})
export class LabelBComponent extends BComponent {
    public type: DisplayType = "default";

    constructor() {
        super("label label-default");
    }

    public Initialize = (type: DisplayType = "default"): LabelBComponent => {
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "label label-" + this.type;
    }
}