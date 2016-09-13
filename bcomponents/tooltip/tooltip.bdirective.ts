import {Directive, Input, ElementRef} from '@angular/core';
import {BDirective, DisplayPosition} from '../bcomponent';

@Directive({
    selector: '[bc-tooltip]'
})
export class TooltipBDirective extends BDirective {
    @Input('bc-tooltip-position') position: DisplayPosition = "bottom";
    @Input('bc-tooltip') bcTooltip: string;

    constructor(el: ElementRef) {
        super(el);
    }

    ngAfterViewInit() {
        this.setAttribute('data-toggle', 'tooltip');
        if(!this.isNullOrEmpty(this.bcTooltip)) {this.setAttribute('title', this.bcTooltip);}
        this.setAttribute('data-placement', this.position);
        $(this.el.nativeElement).tooltip();
    }
}