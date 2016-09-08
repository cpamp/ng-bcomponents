import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: 'bc-heading',
    templateUrl: 'heading.bcomponent.html',
    inputs: BComponentInputs
})
export class HeadingBComponent extends BComponent{
    @Input() title: string;
    @Input() subtitle: string;
    @Input() size: number = 1;

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