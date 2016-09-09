import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

export type DropdownType = "separator" | "header" | "default";

export class DropdownItem {
    public type: DropdownType = "default";
    public text: string;
    public class: string;
    public role: string = "";
    public link: string;

    constructor(type: DropdownType, text: string, link: string) {
        this.type = type;
        this.text = text;
        this.link = link;

        switch(this.type) {
            case "separator":   
                this.class = "divider"; 
                this.role = "separator";
            break;
            case "header":      this.class = "dropdown-header"; break;
            default:            this.class = ""; break;
        }
    }

    public isLink = () => {
        return this.type === "default";
    }

    public isHeader = () => {
        return this.type === "header";
    }
}

export class DropdownBase extends BComponent {
    @Input() items: DropdownItem[];
    @Input() title: string;

    constructor(el: ElementRef = void 0) {
        super("dropdown", el);
    }

    public Initialize = (items: DropdownItem[] = [], title: string = ""): this => {
        this.items = items;
        this.title = title;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}

@Component({
    selector: 'bc-dropdown',
    templateUrl: 'dropdown.bcomponent.html',
    inputs: BComponentInputs
})
export class DropdownBComponent extends DropdownBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-dropdown]',
    inputs: BComponentInputs
})
export class DropdownBDirective extends DropdownBase {
    constructor(el: ElementRef) { super(el); }
}