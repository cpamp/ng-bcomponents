import {Component, Directive, Input, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

export class BlockquoteBase extends BComponent {
    @Input() body: string;
    @Input() footer: string;
    @Input() reverse: boolean = false;

    constructor(el: ElementRef = void 0) {
        super(null, el);
    }

    public Initialize = (body: string = "", footer: string = null, reverse: boolean = false): this => {
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

@Component({
    selector: 'bc-blockquote',
    templateUrl: 'blockquote.bcomponent.html',
    inputs: BComponentInputs
})
export class BlockquoteBComponent extends BlockquoteBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-blockquote]',
    inputs: BComponentInputs
})
export class BlockquoteBDirective extends BlockquoteBase {
    constructor(el: ElementRef) { super(el); }
}