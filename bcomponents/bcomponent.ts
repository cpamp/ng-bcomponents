import {Directive, ElementRef, Input} from '@angular/core';

export class BComponent {
    public self = this;
    public id: string = "";
    public class: string = "";
    public classes: string = "";
    public styles: string = "";
    public name: string = "";
    public aria: string = "";
    public ariaBy: string = "";

    constructor(baseClass: string) {
        this.class = baseClass;
    }

    ngOnInit() {
        this.class = this.class + " " + this.classes;
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
        this.setAttribute("class", this.attributes.class);
        this.setAttribute("id", this.attributes.id);
        this.setAttribute("style", this.attributes.styles);
        this.setAttribute("name", this.attributes.name);
        this.setAttribute("aria-label", this.attributes.aria);
        this.setAttribute("aria-labelledby", this.attributes.ariaBy);
    }
}