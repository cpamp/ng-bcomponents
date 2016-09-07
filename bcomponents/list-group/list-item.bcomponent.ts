import {Component, Input} from '@angular/core';
import {BComponent} from '../bcomponent';

@Component({
    selector: 'list-item',
    templateUrl: 'list-item.bcomponent.html'
})
export class ListItemBComponent extends BComponent {
    @Input() link: string;
    @Input() active: boolean = false;

    constructor() {
        super('list-group-item');
    }
}