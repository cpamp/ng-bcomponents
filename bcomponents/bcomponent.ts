import {Directive, ElementRef, Input} from '@angular/core';

export class BComponent {
    public self = this;
    public id: string;
    public class: string;
    public classes: string;
    public styles: string;
    public name: string;
    public aria: string;
    public ariaBy: string;

    constructor(baseClass: string) {
        this.class = baseClass;
    }

    ngOnChanges() {
        if(this.class != null) {
            if(this.classes != null) {
                this.class = this.class + " " + this.classes;
            }
        } else {
            if(this.classes != null) {
                this.class = this.classes
            }
        }
    }
}

export const BComponentInputs = [
    'id',
    'classes',
    'styles',
    'name',
    'aria',
    'ariaBy'
];

@Directive({
    selector: "[bcomponent-attributes]"
})
export class BComponentAttributes {
    private el: ElementRef;

    @Input('bcomponent-attributes') attributes: BComponent;

    constructor(el: ElementRef) {
        this.el = el;
    }

    setAttribute(attribute: string, value: string) {
        this.el.nativeElement.setAttribute(attribute, value);
    }

    ngOnChanges() {
        if(this.attributes.class != null) this.setAttribute("class", this.attributes.class);
        if(this.attributes.id != null) this.setAttribute("id", this.attributes.id);
        if(this.attributes.styles != null) this.setAttribute("style", this.attributes.styles);
        if(this.attributes.name != null) this.setAttribute("name", this.attributes.name);
        if(this.attributes.aria != null) this.setAttribute("aria-label", this.attributes.aria);
        if(this.attributes.ariaBy != null) this.setAttribute("aria-labelledby", this.attributes.ariaBy);
    }
}