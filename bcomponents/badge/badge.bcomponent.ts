import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';

@Component({
    selector: "badge-bcomponent",
    templateUrl: "badge.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['value'])
})
export class BadgeBComponent extends BComponent {
    public value: number = 0;

    constructor() {
        super("badge");
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