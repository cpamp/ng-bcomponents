import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

export class ThumbnailBase extends BComponent {
    @Input() heading: HeadingBComponent;
    @Input() link: string;
    @Input() header: string;
    @Input() body: string;
    @Input() footer: string;
    @Input() src: string;
    @Input() alt: string;
    @Input() size: number = 3;

    constructor(el: ElementRef = void 0) {
        super("thumbnail", el);
    }

    public Initialize = (heading: HeadingBComponent = null, link: string = null, header: string = null, body: string = null, footer: string = null, src: string = "", alt: string = "", size: number = 3): this => {
        this.heading = heading;
        this.link = link;
        this.header = header;
        this.body = body;
        this.footer = footer;
        this.src = src;
        this.alt = alt;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    hasHeading = (): boolean => {
        return !this.isNull(this.heading);
    }

    hasHeader = (): boolean => {
        return this.header !== null || this.header.trim() !== "";
    }

    hasBody = (): boolean => {
        return this.body !== null || this.body.trim() !== "";
    }

    hasFooter = (): boolean => {
        return this.footer !== null || this.footer.trim() !== "";
    }

    hasLink = (): boolean => {
        return this.link !== null || this.link.trim() !== "";
    }
}

@Component({
    selector: "bc-thumbnail",
    templateUrl: "thumbnail.bcomponent.html",
    inputs: BComponentInputs
})
export class ThumbnailBComponent extends ThumbnailBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-thumbnail]",
    inputs: BComponentInputs
})
export class ThumbnailBDirective extends ThumbnailBase {
    constructor(el: ElementRef) { super(el); }
}