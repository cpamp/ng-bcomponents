import {Component, Directive, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

export class LinkBase extends BComponent {
    @Input() text: string;
    @Input() link: string;
    @Input() router: boolean = false;
    @Input() click: () => void;

    @Output() onClick: EventEmitter<this> = new EventEmitter<this>();

    constructor(el?: ElementRef) {
        super(null, el);
    }

    public Initialize = (text: string = "", link: string = "", router: boolean = false, click: () => void = null): this => {
        this.text = text;
        this.link = link;
        this.router = router;
        this.click = click;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }

    public clickEvent = () => {
        if(!this.isNull(this.click)) { this.click(); }
        this.onClick.emit(this);
    }
}

@Component({
    selector: "bc-link",
    templateUrl: "link.bcomponent.html",
    inputs: BComponentInputs
})
export class LinkBComponent extends LinkBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-link]",
    inputs: BComponentInputs
})
export class LinkBDirective extends LinkBase {
    constructor(el: ElementRef) { super(el); }
}