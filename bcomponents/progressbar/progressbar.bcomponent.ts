import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "progressbar-bcomponent",
    templateUrl: "progressbar.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['value', 'type', 'display', 'displayPercent', 'striped', 'animated', 'minValue', 'maxValue'])
})
export class ProgressbarBComponent extends BComponent {
    public value: number = 0;
    public type: DisplayType = "success";
    public display: string = "%";
    public displayPercent: boolean = true;
    public striped: boolean = false;
    public animated: boolean = false;
    public minValue: number = 0;
    public maxValue: number = 100;

    public percentValue: number;

    constructor() {
        super("progress-bar progress-bar-success");
    }

    private bounds = () => {
        if(this.value < this.minValue) { this.value = this.minValue; }
        if(this.value > this.maxValue) { this.value = this.maxValue; }
        this.percentValue = Math.round(this.value / this.maxValue * 100);
    }

    ngOnChildChanges = () => {
        this.type = this.type === "default" || this.type === "primary" ? "success" : this.type;
        this.baseClass = "progress-bar progress-bar-" + this.type;
        if(this.striped) { this.baseClass += " progress-bar-striped"; }
        if(this.animated) { this.baseClass += " active"; }
        this.bounds();
        this.styles = "width: " + this.percentValue + "%;";
    }

    public increment = (by: number = 1) => {
        this.value += by;
    }

    public decrement = (by: number = 1) => {
        this.value -= by;
    }
}