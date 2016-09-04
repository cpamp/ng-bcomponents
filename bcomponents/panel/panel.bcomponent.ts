import {Component} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "panel-bcomponent",
    templateUrl: "panel.bcomponent.html",
    directives: [],
    inputs: BComponentInputs.concat(['header', 'body', 'footer', 'type'])
})
export class PanelBComponent extends BComponent {
    public header: string;
    public body: string;
    public footer: string;
    public type: DisplayType = "default";

    constructor() {
        super("panel panel-default");
    }

    public Initialize = (header: string = null, body: string = "", footer: string = null, type: DisplayType = "default"): PanelBComponent => {
        this.header = header;
        this.body = body;
        this.footer = footer;
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "panel panel-" + this.type;
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }
}