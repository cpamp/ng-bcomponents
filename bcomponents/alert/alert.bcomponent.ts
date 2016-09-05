import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "alert-bcomponent",
    templateUrl: "alert.bcomponent.html",
    inputs: BComponentInputs
})
export class AlertBComponent extends BComponent {
    @Input() text: string;
    @Input() dismissible: boolean = false;
    @Input() hidden: boolean = false;
    @Input() type: DisplayType = "success";

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

    ngAfterChildViewInit = () => {
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