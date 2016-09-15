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

    private isNumer = (): boolean => {
        return typeof this.value === 'number';
    }

    /**
     * Set the value of the badge
     * @param {number} value - Value to set the badge to
     * @memberOf BadgeBase
     */
    public setValue = (value: number) => {
        this.value = value;
    }

    /**
     * Increase the value of the badge
     * @param {number} by - Value to increase the badge number by. Defaults to 1
     * @memberOf BadgeBase
     */
    public increment = (by: number = 1) => {
        if(this.isNumer()) { this.value += by; }
    }

    /**
     * Decrease the value of the badge
     * @param {number} by - Value to decrease the badge number by. Defaults to 1
     * @memberOf BadgeBase
     */
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