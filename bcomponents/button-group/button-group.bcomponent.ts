import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs, DisplaySize} from '../bcomponent';
import {ButtonBComponent} from '../button/button.bcomponent';
import {ComponentFactory} from '../component.factory';

@Component({
    selector: 'bc-button-group',
    templateUrl: 'button-group.bcomponent.html',
    inputs: BComponentInputs
})
export class ButtonGroupBComponent extends BComponent {
    @Input() items: ButtonBComponent[];
    @Input() size: DisplaySize;

    constructor() {
        super("btn-group");
    }

    public Initialize = (items: ButtonBComponent[] = [], size: DisplaySize = null): ButtonGroupBComponent => {
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