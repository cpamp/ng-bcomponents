import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: "link-bcomponent",
    templateUrl: "link.bcomponent.html",
    inputs: BComponentInputs
})
export class LinkBComponent extends BComponent {
    @Input() text: string;
    @Input() link: string;
    @Input() router: boolean = false;

    constructor() {
        super(null);
    }

    public Initialize = (text: string = "", link: string = "", router: boolean = false): LinkBComponent => {
        this.text = text;
        this.link = link;
        this.router = router;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }
}