import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplaySize} from '../bcomponent';

@Component({
    selector: "well-bcomponent",
    templateUrl: "well.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'size'])
})
export class WellBComponent extends BComponent {
    public text: string;
    public size: DisplaySize;

    constructor() {
        super("well");
    }

    ngOnChildChanges = () => {
        if(this.size !== null) {
            this.baseClass = "well well-" + this.size;
        }
    }
}