import {Component, Directive, Input, Output, EventEmitter, SimpleChange, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';


export class BadgeBase extends BComponent {
    @Input() value: number = 0;

    @Output() change: EventEmitter<this> = new EventEmitter<this>();

    constructor(el: ElementRef = void 0) {
        super("badge", el);
    }

    ngOnChildChanges = (change?: {[property: string]: SimpleChange}) => {
        if(!this.isNull(change) && change['value']) {
            this.change.emit(this);
        }
    }

    public Initialize = (value: number = 0): this => {
        this.value = value;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public setValue = (value: number) => {
        this.value = value;
    }

    private isNumer = (): boolean => {
        return typeof this.value === 'number';
    }

    public increment = (by: number = 1) => {
        if(this.isNumer()) { this.value += by; }
    }

    public decrement = (by: number = 1) => {
        if(this.isNumer()) { this.value -= by; }
    }
}

@Component({
    selector: "bc-badge",
    templateUrl: "badge.bcomponent.html",
    inputs: BComponentInputs
})
export class BadgeBComponent extends BadgeBase {
    constructor(){ super(); }
}

@Directive({
    selector: "[bc-badge]",
    inputs: BComponentInputs
})
export class BadgeBDirective extends BadgeBase {
    constructor(el: ElementRef) { super(el); }
}