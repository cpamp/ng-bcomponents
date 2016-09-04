import {Component} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

export type VerticalAlignment = "left" | "right";
export type HorizontalAlignment = "top" | "middle" | "bottom";
export class MediaAlignment {
    public vertical: VerticalAlignment;
    public horizontal: HorizontalAlignment;

    constructor(vertical: VerticalAlignment = "left", horizontal: HorizontalAlignment = "top") {
        this.vertical = vertical;
        this.horizontal = horizontal;
    }
}

@Component({
    selector: "media-bcomponent",
    templateUrl: "media.bcomponent.html",
    inputs: BComponentInputs.concat(['heading', 'title', 'body', 'link', 'src', 'alt', 'alignment', 'size']),
    styles: ["/deep/ h1,h2,h3,h4,h5,h6 { margin-top: 0px; }"]
})
export class MediaBComponent extends BComponent {
    public alignment: MediaAlignment;
    public heading: HeadingBComponent;
    public title: string;
    public body: string;
    public link: string;
    public src: string;
    public alt: string;
    public size: string;

    public mediaClass;

    constructor() {
        super("media");
    }

    public Initialize = (src: string = "", alt: string = "", heading: HeadingBComponent = null, title: string = "", size: string = "3", body: string = "", link: string = null, alignment: MediaAlignment = new MediaAlignment()): MediaBComponent => {
        this.heading = heading;
        this.title = title;
        this.body = body;
        this.link = link;
        this.alignment = alignment;
        this.src = src;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.mediaClass = "media-" + this.alignment.vertical + " media-" + this.alignment.horizontal;
    }

    public isRight = (): boolean => {
        return this.alignment.vertical == "right";
    }

    public hasLink = (): boolean => {
        return this.link !== null;
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }
}