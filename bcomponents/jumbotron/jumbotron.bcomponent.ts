import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: 'jumbotron-bcomponent',
    templateUrl: 'jumbotron.bcomponent.html',
    directives: [BComponentAttributes, HeadingBComponent],
    inputs: BComponentInputs.concat(['heading', 'title', 'subtitle', 'body', 'size'])
})
export class JumbotronBComponent extends BComponent {
    public heading: HeadingBComponent;
    public title: string;
    public subtitle: string;
    public body: string;
    public size: number;

    constructor() {
        super("jumbotron");
    }

    public Initialize = (title: string = "", subtitle: string = "", body: string = "", size: number = 1): JumbotronBComponent => {
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasHeading = (): boolean => {
        return !this.isNull(this.heading);
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }
}