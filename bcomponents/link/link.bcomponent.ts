import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';

@Component({
    selector: "link-bcomponent",
    templateUrl: "link.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['label', 'link'])
})
export class LinkBComponent extends BComponent {
    public label: string;
    public link: string;
}