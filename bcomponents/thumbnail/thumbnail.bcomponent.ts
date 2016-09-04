import {Component} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: "thumbnail-bcomponent",
    templateUrl: "thumbnail.bcomponent.html",
    inputs: BComponentInputs.concat(['heading', 'link', 'header', 'body', 'footer', 'src', 'alt', 'size'])
})
export class ThumbnailBComponent extends BComponent {
    public heading: HeadingBComponent;
    public link: string;
    public header: string;
    public body: string;
    public footer: string;
    public src: string;
    public alt: string;
    public size: number = 3;

    constructor() {
        super("thumbnail");
    }

    public Initialize = (heading: HeadingBComponent = null, link: string = null, header: string = null, body: string = null, footer: string = null, src: string = "", alt: string = "", size: number = 3): ThumbnailBComponent => {
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