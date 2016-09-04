import {Component} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "label-bcomponent",
    templateUrl: "label.bcomponent.html",
    inputs: BComponentInputs.concat(['text', 'type'])
})
export class LabelBComponent extends BComponent {
    public text: string;
    public type: DisplayType = "default";

    constructor() {
        super("label label-default");
    }

    public Initialize = (text: string = "", type: DisplayType = "default"): LabelBComponent => {
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