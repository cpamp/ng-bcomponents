import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType, DisplaySize} from '../bcomponent';
import {ButtonBComponent} from '../button/button.bcomponent';

@Component({
    selector: "input-group-bcomponent",
    templateUrl: "input-group.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['placeholder', 'model', 'size', 'frontText', 'backText', 'frontButton', 'backButton'])
})
export class InputGroupBComponent extends BComponent {
    public placeholder: string;
    public model: string;
    public size: DisplaySize;
    public frontText: string;
    public backText: string;
    public frontButton: ButtonBComponent;
    public backButton: ButtonBComponent;

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
        return this;
    }

    ngOnChildChanges = () => {
        this.groupClass = "input-group";
        if(!this.isNull(this.size)) {
            this.groupClass += " input-group-" + this.size;
        }
    }
}