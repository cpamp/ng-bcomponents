import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {HeadingBComponent} from '../heading/heading.bcomponent';

export class JumbotronBase extends BComponent {
    @Input() heading: HeadingBComponent;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() body: string;
    @Input() size: number;

    constructor(el: ElementRef = void 0) {
        super("jumbotron", el);
    }

    public Initialize = (title: string = "", subtitle: string = "", body: string = "", size: number = 1): this => {
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasHeading = (): boolean => {
        return !this.isNull(this.heading);
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }
}

@Component({
    selector: 'bc-jumbotron',
    templateUrl: 'jumbotron.bcomponent.html',
    inputs: BComponentInputs
})
export class JumbotronBComponent extends JumbotronBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-jumbotron]',
    inputs: BComponentInputs
})
export class JumbotronBDirective extends JumbotronBase {
    constructor(el: ElementRef) { super(el); }
}