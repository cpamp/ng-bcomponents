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

    setValue(value: number) {
        this.value = value;
    }

    increment(by: number = 1) {
        this.value += by;
    }

    decrement(by: number = 1) {
        this.value -= by;
    }
}