import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';

@Component({
    selector: "link-bcomponent",
    templateUrl: "link.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'link'])
})
export class LinkBComponent extends BComponent {
    public text: string;
    public link: string;

    constructor() {
        super(null);
    }

    public Initialize = (text: string = "", link: string = ""): LinkBComponent => {
        this.text = text;
        this.link = link;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}