import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: "link-bcomponent",
    templateUrl: "link.bcomponent.html",
    inputs: BComponentInputs
})
export class LinkBComponent extends BComponent {
    @Input() text: string;
    @Input() link: string;
    @Input() router: boolean = false;
    @Input() onClick: () => void;

    @Output() click: EventEmitter<LinkBComponent> = new EventEmitter<LinkBComponent>();

    constructor() {
        super(null);
    }

    public Initialize = (text: string = "", link: string = "", router: boolean = false, onClick: () => void = null): LinkBComponent => {
        this.text = text;
        this.link = link;
        this.router = router;
        this.onClick = onClick;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }

    public clickEvent = () => {
        if(!this.isNull(this.onClick)) { this.onClick(); }
        this.click.emit(this);
    }
}