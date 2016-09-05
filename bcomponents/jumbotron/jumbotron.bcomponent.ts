import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: 'jumbotron-bcomponent',
    templateUrl: 'jumbotron.bcomponent.html',
    inputs: BComponentInputs
})
export class JumbotronBComponent extends BComponent {
    @Input() heading: HeadingBComponent;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() body: string;
    @Input() size: number;

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