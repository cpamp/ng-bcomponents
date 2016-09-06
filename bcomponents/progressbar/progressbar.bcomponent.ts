import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "progressbar-bcomponent",
    templateUrl: "progressbar.bcomponent.html",
    inputs: BComponentInputs
})
export class ProgressbarBComponent extends BComponent {
    @Input() value: number = 0;
    @Input() type: DisplayType = "success";
    @Input() display: string = "%";
    @Input() displayPercent: boolean = true;
    @Input() striped: boolean = false;
    @Input() animated: boolean = false;
    @Input() minValue: number = 0;
    @Input() maxValue: number = 100;

    @Output() change: EventEmitter<ProgressbarBComponent> = new EventEmitter<ProgressbarBComponent>();

    public percentValue: number;

    constructor() {
        super("progress-bar progress-bar-success");
    }

    private bounds = () => {
        if(this.value < this.minValue) { this.value = this.minValue; }
        if(this.value > this.maxValue) { this.value = this.maxValue; }
        this.percentValue = Math.round(this.value / this.maxValue * 100);
    }

    public Initialize = (value: number = 0, type: DisplayType = "success", display: string = "%", displayPercent: boolean = true, striped: boolean = false, animated: boolean = false, minValue: number = 0, maxValue: number = 100): ProgressbarBComponent => {
        this.value = value;
        this.type = type;
        this.display = display;
        this.displayPercent = displayPercent;
        this.striped = striped;
        this.animated = animated;
        this.minValue = minValue;
        this.maxValue = maxValue;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = (change?: {[property: string]: SimpleChange}) => {
        this.type = this.type === "default" || this.type === "primary" ? "success" : this.type;
        this.baseClass = "progress-bar progress-bar-" + this.type;
        if(this.striped) { this.baseClass += " progress-bar-striped"; }
        if(this.animated) { this.baseClass += " active"; }
        this.bounds();
        this.styles = "width: " + this.percentValue + "%;";
        
        if(!this.isNull(change) && change['value']) {
            this.change.emit(this);
        }
    }

    public increment = (by: number = 1) => {
        this.value += by;
    }

    public decrement = (by: number = 1) => {
        this.value -= by;
    }
}