import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';

@Component({
    selector: 'heading-bcomponent',
    templateUrl: 'heading.bcomponent.html',
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['title', 'subTitle', 'size'])
})
export class HeadingBComponent extends BComponent{
    public title: string;
    public subTitle: string;
    public size: number = 1;

    constructor() {
        super("page-header");
    }

    ngOnInit() {
        console.log(this.size);
        console.log(this.title);
    }
}