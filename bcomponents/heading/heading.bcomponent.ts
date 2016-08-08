import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';

@Component({
    selector: 'heading-bcomponent',
    templateUrl: 'heading.bcomponent.html',
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['title', 'subtitle', 'size'])
})
export class HeadingBComponent extends BComponent{
    public title: string;
    public subtitle: string;
    public size: number = 1;

    constructor() {
        super("page-header");
    }

    ngOnChildChanges = () => {
        if(this.size == null) {
            this.size = 1;
        }
    }
}