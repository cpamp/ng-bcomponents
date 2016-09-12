import {Directive, Input, ElementRef} from '@angular/core';
import {DisplayPosition} from '../bcomponent';

@Directive({
    selector: '[bc-tooltip]'
})
export class TooltipBDirective {
    @Input('bc-tooltip-position') position: DisplayPosition = "bottom";
    @Input('bc-tooltip') bcTooltip: string;

    private el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }

    private setAttribute = (attr: string, value: string) => {
        $(this.el.nativeElement).attr(attr, value);
    }

    ngAfterViewInit() {
        this.setAttribute('data-toggle', 'tooltip');
        if(this.bcTooltip != null && this.bcTooltip !== '') {this.setAttribute('title', this.bcTooltip);}
        this.setAttribute('data-placement', this.position);
        $(this.el.nativeElement).tooltip();
    }
}