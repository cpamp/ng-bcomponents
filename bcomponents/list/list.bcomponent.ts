import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {BadgeBComponent} from '../badge/badge.bcomponent';

export class ListGroupItem {
    public text: string;
    public badge: BadgeBComponent;
    public link: string;
    public active: boolean;

    constructor(text: string, badge: BadgeBComponent = null, link: string = "", active: boolean = false) {
        this.text = text;
        this.badge = badge;
        this.link = link;
        this.active = active;
    }

    public hasBadge = (): boolean => {
        return this.badge !== null;
    }
}

export class ListBase extends BComponent {
    @Input() items: ListGroupItem[];
    @Input() linked: boolean = false;

    constructor(el: ElementRef = void 0) {
        super("list-group", el);
    }

    public Initialize = (items: ListGroupItem[] = [], linked: boolean = false): this => {
        this.items = items;
        this.linked = linked;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}

@Component({
    selector: "bc-list",
    templateUrl: "list.bcomponent.html",
    inputs: BComponentInputs
})
export class ListBComponent extends ListBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-list]",
    inputs: BComponentInputs
})
export class ListBDirective extends ListBase {
    constructor(el: ElementRef) { super(el); }
}