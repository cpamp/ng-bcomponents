import {Component} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: 'heading-bcomponent',
    templateUrl: 'heading.bcomponent.html',
    directives: [],
    inputs: BComponentInputs.concat(['title', 'subtitle', 'size'])
})
export class HeadingBComponent extends BComponent{
    public title: string;
    public subtitle: string;
    public size: number = 1;

    constructor() {
        super("page-header");
    }

    public Initialize = (title: string = "", subtitle: string = "", size: number = 1): HeadingBComponent => {
        this.title = title;
        this.subtitle = subtitle;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        if(this.size == null) {
            this.size = 1;
        }
    }
}