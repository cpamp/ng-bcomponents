import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

@Component({
    selector: "thumbnail-bcomponent",
    templateUrl: "thumbnail.bcomponent.html",
    directives: [BComponentAttributes, HeadingBComponent],
    inputs: BComponentInputs.concat(['link', 'header', 'body', 'footer', 'src', 'alt', 'size'])
})
export class ThumbnailBComponent extends BComponent {
    public link: string;
    public header: string;
    public body: string;
    public footer: string;
    public src: string;
    public alt: string;
    public size: number = 3;

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

    hasContent = (): boolean => {
        return this.hasHeader() || this.hasBody() || this.hasFooter();
    }

    constructor() {
        super("thumbnail");
    }
}