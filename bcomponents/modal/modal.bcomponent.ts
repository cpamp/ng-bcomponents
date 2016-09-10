import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplaySize} from '../bcomponent';

@Directive({selector: 'bc-modal-title'}) export class ModalTitleBComponentDirective {}
@Directive({selector: 'bc-modal-body'}) export class ModalBodyBComponentDirective {}
@Directive({selector: 'bc-modal-footer'}) export class ModalFooterBComponentDirective {}

export class ModalBase extends BComponent {
    @Input() fade: boolean = true;
    @Input() title: string;
    @Input() body: string;
    @Input() footer: string;

    constructor(el: ElementRef = void 0) {
        super("modal");
    }

    public Initialize = (fade: boolean = true, title: string = "", body: string = "", footer: string = ""): this => {
        this.fade = fade;
        this.title = title;
        this.body = body;
        this.footer = footer;
        return this;
    }

    ngOnChildChanges = () => {
        if(this.fade) {
            this.baseClass = "modal fade";
        }
    }

    public hasTitle = (): boolean => {
        return !this.isNull(this.title);
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }

    public hasFooter = (): boolean => {
        return !this.isNull(this.footer);
    }

    public open = () => {
        this.getSelector().modal('show');
    }

    public close = () => {
        this.getSelector().modal('hide');
    }
}

@Component({
    selector: 'bc-modal',
    templateUrl: 'modal.bcomponent.html',
    inputs: BComponentInputs
})
export class ModalBComponent extends ModalBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-modal]',
    inputs: BComponentInputs
})
export class ModalBDirective extends ModalBase {
    constructor(el: ElementRef) { super(el); }
}