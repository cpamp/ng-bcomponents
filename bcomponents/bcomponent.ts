import {Directive, ElementRef, Input, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {ComponentFactory} from './component.factory';

export const BComponentInputs = [
    'id',
    'classes',
    'styles',
    'name',
    'aria',
    'ariaBy',
    'bcomponent'
];

export class BComponent {
    protected self = this;
    protected bcomponent: any = null;
    protected ngOnChildChanges: () => void;
    protected baseClass: string;

    public class: string;
    public id: string;
    public classes: string;
    public styles: string;
    public name: string;
    public aria: string;
    public ariaBy: string;

    constructor(baseClass: string) {
        this.baseClass = baseClass;
        this.ngOnChanges();
    }

    public InitializeAttributes = (id: string = "", classes: string = "", styles: string = "", name: string = "", aria: string = "", ariaBy: string = "") => {
        this.id = id;
        this.classes = classes;
        this.styles = styles;
        this.name = name;
        this.aria = aria;
        this.ariaBy = ariaBy;
        this.buildClass();
        return this;
    }

    ngOnChanges() {
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        if(!this.isNull(this.bcomponent)) {
            ComponentFactory.copy(this, this.bcomponent);
        }
        this.buildClass();
    }

    public loadComponent = (component: any, view: ViewContainerRef, crf: ComponentFactoryResolver) => {
        ComponentFactory.loadComponent(component, view, crf);
    }

    public buildClass = () => {
        if(this.baseClass != null) {
            this.class = this.baseClass;
            if(this.classes != null) {
                this.class +=  " " + this.classes;
            }
        } else {
            if(this.classes != null) {
                this.class = this.classes
            }
        }
    }

    public isNull = (value: any): boolean => {
        return value == null;
    }
}

@Directive({
    selector: "[bcomponent-attributes]"
})
export class BComponentAttributes {
    private el: ElementRef;

    @Input('bcomponent-attributes') attributes: BComponent;

    constructor(el: ElementRef) {
        this.el = el;
    }

    public setAttribute = (attribute: string, value: string) => {
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

export type DisplayType = "default" | "primary" | "success" | "info" | "warning" | "danger";

export type DisplaySize = "lg" | "sm" | "xs";