import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType, DisplaySize} from '../bcomponent';
import {ButtonBComponent} from '../button/button.bcomponent';

@Component({
    selector: "input-group-bcomponent",
    templateUrl: "input-group.bcomponent.html",
    inputs: BComponentInputs
})
export class InputGroupBComponent extends BComponent {
    @Input() placeholder: string;
    @Input() model: string;
    @Input() size: DisplaySize;
    @Input() frontText: string;
    @Input() backText: string;
    @Input() frontButton: ButtonBComponent;
    @Input() backButton: ButtonBComponent;

    public groupClass: string;

    constructor() {
        super("form-control");
    }

    public Initialize = (placeholder: string = "", model: string = "", size: DisplaySize = null, frontText: string = null, backText: string = null, frontButton: ButtonBComponent = null, backButton: ButtonBComponent = null): InputGroupBComponent => {
        this.placeholder = placeholder;
        this.model = model;
        this.size = size;
        this.frontText = frontText;
        this.backText = backText;
        this.frontButton = frontButton;
        this.backButton = backButton;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.groupClass = "input-group";
        if(!this.isNull(this.size)) {
            this.groupClass += " input-group-" + this.size;
        }
    }
}