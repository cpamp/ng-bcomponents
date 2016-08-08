import {Component, ViewChild} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "alert-bcomponent",
    templateUrl: "alert.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'dismissible', 'hidden', 'type'])
})
export class AlertBComponent extends BComponent {
    @ViewChild(BComponentAttributes) attributes: BComponentAttributes;
    public text: string;
    public dismissible: boolean = false;
    public hidden: boolean = false;
    public type: DisplayType = "success";

    constructor() {
        super("alert alert-success");
    }

    ngOnChildChanges = () => {
        this.type = this.type === "default" || this.type === "primary" ? "success" : this.type;
        this.baseClass = "alert alert-" + this.type;
        if(this.dismissible) {
            this.baseClass += " alert-dismissible";
        }
    }

    public show = () => {
        this.hidden = true;
    }

    public hide = () => {
        this.hidden = false;
    }
}