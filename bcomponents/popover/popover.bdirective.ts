import {Directive, Input, ElementRef} from '@angular/core';
import {BDirective, DisplayPosition} from '../bcomponent';

@Directive({
    selector: '[bc-popover]'
})
export class PopoverBDirective extends BDirective {
    @Input('bc-popover-position') position: DisplayPosition = "bottom";
    @Input('bc-popover') bcPopover: string;
    @Input('bc-popover-header') header: string;
    @Input('bc-popover-focus') focus = null;
    @Input('bc-popover-hover') hover = null;

    constructor(el: ElementRef) {
        super(el);
    }

    ngAfterViewInit() {
        this.setAttribute('data-toggle', 'popover');
        if(!this.isNullOrEmpty(this.bcPopover)) {this.setAttribute('data-content', this.bcPopover);}
        if(!this.isNullOrEmpty(this.header)) {this.setAttribute('title', this.header);}
        if(!this.isNull(this.focus)) {this.setAttribute('data-trigger', 'focus');}
        if(!this.isNull(this.hover)) {this.setAttribute('data-trigger', 'hover');}
        this.setAttribute('data-placement', this.position);
        $(this.el.nativeElement).popover();
    }
}