import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

type DropdownType = "separator" | "header" | "default";

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
}

@Component({
    selector: 'dropdown-bcomponent',
    templateUrl: 'dropdown.bcomponent.html',
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['items', 'title'])
})
export class DropdownBComponent extends BComponent {
    public items: DropdownItem[];
    public title: string;

    constructor() {
        super("dropdown");
    }
}