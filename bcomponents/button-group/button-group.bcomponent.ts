import {Component, Directive, ElementRef, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplaySize} from '../bcomponent';
import {ButtonBComponent} from '../button/button.bcomponent';
import {ComponentFactory} from '../component.factory';

export class ButtonGroupBase extends BComponent {
    @Input() items: ButtonBComponent[];
    @Input() size: DisplaySize;

    constructor(el: ElementRef = void 0) {
        super("btn-group", el);
    }

    public Initialize = (items: ButtonBComponent[] = [], size: DisplaySize = null): this => {
        this.items = items;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        this.items[0] = this.items[0].Initialize().InitializeAttributes()
        return this;
    }

    ngOnChildChanges = () => {
        if(!this.isNull(this.size)) {
            this.baseClass = "btn-group btn-group-" + this.size;
        }
    }
}

@Component({
    selector: 'bc-button-group',
    templateUrl: 'button-group.bcomponent.html',
    inputs: BComponentInputs
})
export class ButtonGroupBComponent extends ButtonGroupBase {
    constructor() { super(); }
}

@Directive({
    selector: '[bc-button-group]',
    inputs: BComponentInputs
})
export class ButtonGroupBDirective extends ButtonGroupBase {
    constructor(el: ElementRef) { super(el); }
}