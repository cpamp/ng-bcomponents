import {Component, ViewChild} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "alert-bcomponent",
    templateUrl: "alert.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'dismissible', 'hidden', 'type'])
})
export class AlertBComponent extends BComponent {
    public text: string;
    public dismissible: boolean = false;
    public hidden: boolean = false;
    public type: DisplayType = "success";

    constructor() {
        super("alert alert-success");
    }

    public Initialize = (text: string = "", dismissible: boolean = false, hidden: boolean = false, type: DisplayType = "success"): AlertBComponent => {
        this.text = text;
        this.dismissible = dismissible;
        this.hidden = hidden;
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildInit = () => {
        if(this.hidden === true) { this.hide(0); }
    }

    ngOnChildChanges = () => {
        this.type = this.type === "default" || this.type === "primary" ? "success" : this.type;
        this.baseClass = "alert alert-" + this.type;
        if(this.dismissible) {
            this.baseClass += " alert-dismissible";
        }
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }
}