import {Component} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: 'blockquote-bcomponent',
    templateUrl: 'blockquote.bcomponent.html',
    inputs: BComponentInputs.concat(['body', 'footer', 'reverse'])
})
export class BlockquoteBComponent extends BComponent {
    public body: string;
    public footer: string;
    public reverse: boolean = false;

    constructor() {
        super(null);
    }

    public Initialize = (body: string = "", footer: string = null, reverse: boolean = false): BlockquoteBComponent => {
        this.body = body;
        this.footer = footer;
        this.reverse = reverse;
        return this;
    }

    ngOnChildChanges = () => {
        if(this.reverse) {
            this.baseClass = "blockquote-reverse";
        }
    }

    public hasBody = ():boolean => {
        return !this.isNull(this.body);
    }

    public hasFooter = ():boolean => {
        return !this.isNull(this.footer);
    }
}