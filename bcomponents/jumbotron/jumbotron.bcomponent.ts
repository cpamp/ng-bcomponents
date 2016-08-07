import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';

@Component({
    selector: 'jumbotron-bcomponent',
    templateUrl: 'jumbotron.bcomponent.html',
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['title', 'subTitle', 'body'])
})
export class JumbotronBComponent extends BComponent {
    public title: string;
    public subTitle: string;
    public body: string;

    constructor() {
        super("jumbotron");
    }
}