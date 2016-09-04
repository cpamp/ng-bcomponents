import {Component} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: "link-bcomponent",
    templateUrl: "link.bcomponent.html",
    directives: [],
    inputs: BComponentInputs.concat(['text', 'link', 'router'])
})
export class LinkBComponent extends BComponent {
    public text: string;
    public link: string;
    public router: boolean = false;

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