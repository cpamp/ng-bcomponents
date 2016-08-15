import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "panel-bcomponent",
    templateUrl: "panel.bcomponent.html",
    directives: [BComponentAttributes],
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

    ngOnChildChanges = () => {
        this.baseClass = "panel panel-" + this.type;
    }
}