import {Component, Input} from '@angular/core';
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

@Component({
    selector: "list-group-bcomponent",
    templateUrl: "list-group.bcomponent.html",
    inputs: BComponentInputs
})
export class ListGroupBComponent extends BComponent {
    @Input() items: ListGroupItem[];
    @Input() linked: boolean = false;

    constructor() {
        super("list-group");
    }

    public Initialize = (items: ListGroupItem[] = [], linked: boolean = false): ListGroupBComponent => {
        this.items = items;
        this.linked = linked;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}