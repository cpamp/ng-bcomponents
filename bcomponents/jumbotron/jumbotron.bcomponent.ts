import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: 'jumbotron-bcomponent',
    templateUrl: 'jumbotron.bcomponent.html',
    directives: [BComponentAttributes, HeadingBComponent],
    inputs: BComponentInputs.concat(['title', 'subtitle', 'body', 'size'])
})
export class JumbotronBComponent extends BComponent {
    public title: string;
    public subtitle: string;
    public body: string;
    public size: number;

    constructor() {
        super("jumbotron");
    }
}