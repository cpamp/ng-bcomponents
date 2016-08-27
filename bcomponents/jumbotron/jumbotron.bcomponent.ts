import {Component} from '@angular/core';
import {BComponent, BComponentInputs, BComponentAttributes} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: 'jumbotron-bcomponent',
    templateUrl: 'jumbotron.bcomponent.html',
    directives: [BComponentAttributes, HeadingBComponent],
    inputs: BComponentInputs.concat(['heading', 'title', 'subtitle', 'size'])
})
export class JumbotronBComponent extends BComponent {
    public heading: HeadingBComponent;
    public title: string;
    public subtitle: string;
    public size: number;

    constructor() {
        super("jumbotron");
    }

    public Initialize = (title: string = "", subtitle: string = "", size: number = 1): JumbotronBComponent => {
        this.title = title;
        this.subtitle = subtitle;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasHeading = () => {
        return !this.isNull(this.heading);
    }
}