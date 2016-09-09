import {Directive, ElementRef, Input, ViewContainerRef, ComponentFactoryResolver, SimpleChange} from '@angular/core';
import {ComponentFactory} from './component.factory';
import {IdentifierFactory} from './identifier.factory';

export const BComponentInputs = [
    'id',
    'classes',
    'styles',
    'name',
    'aria',
    'ariaBy',
    'bcomponent'
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

    public setAttribute = (attribute: string, value: string) => {
        this.el.nativeElement.setAttribute(attribute, value);
    }

    public setAttributes = (attributes: BComponent) => {
        if(attributes.class != null) this.setAttribute("class", attributes.class);
        if(attributes.id != null) this.setAttribute("id", attributes.id);
        if(attributes.styles != null) this.setAttribute("style", attributes.styles);
        if(attributes.name != null) this.setAttribute("name", attributes.name);
        if(attributes.aria != null) this.setAttribute("aria-label", attributes.aria);
        if(attributes.ariaBy != null) this.setAttribute("aria-labelledby", attributes.ariaBy);
    }

    ngOnChanges() {
        this.setAttributes(this.attributes);
    }
}

export class BComponent {
    // Inputs
    public id: string;
    public classes: string;
    public styles: string;
    public name: string;
    public aria: string;
    public ariaBy: string;
    protected bcomponent: any = null;

    protected self = this;
    protected baseClass: string;

    protected ngOnChildChanges: (change?: {[property: string]: SimpleChange}) => void;
    protected ngOnChildInit: () => void;
    protected ngAfterChildViewInit: () => void;

    public static autoIdentifier: boolean = true;

    public class: string;

    private attributes: BComponentAttributes;

    constructor(baseClass: string, el: ElementRef = void 0) {
        this.baseClass = baseClass;
        this.ngOnChanges();
        if(el !== void 0) {
            this.attributes = new BComponentAttributes(el);
        }
    }

    private setAttributes = () => {
        if(!this.isNull(this.attributes)) {
            this.attributes.setAttributes(this.self);
        }
    }

    ngOnInit() {
        if(this.isNull(this.id) && BComponent.autoIdentifier) {
            this.id = IdentifierFactory.getIdentifier();
        }
        if(!this.isNull(this.ngOnChildInit)) { this.ngOnChildInit(); }
        this.setAttributes();
    }

    ngOnChanges(change?: {[property: string]: SimpleChange}) {
        if(!this.isNull(this.ngOnChildChanges)) { this.ngOnChildChanges(change); }
        if(!this.isNull(this.bcomponent)) {
            ComponentFactory.copy(this, this.bcomponent);
        }
        this.buildClass();
        this.setAttributes();
    }

    ngAfterViewInit() {
        if(!this.isNull(this.ngAfterChildViewInit)) { this.ngAfterChildViewInit(); }
    }

    protected loadComponent = (component: any, view: ViewContainerRef, crf: ComponentFactoryResolver) => {
        ComponentFactory.loadComponent(component, view, crf);
    }

    private buildClass = () => {
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

    protected isNull = (value: any): boolean => {
        return value == null;
    }

    public InitializeAttributes = (id: string = "", classes: string = "", styles: string = "", name: string = "", aria: string = "", ariaBy: string = ""): this => {
        this.id = id;
        this.classes = classes;
        this.styles = styles;
        this.name = name;
        this.aria = aria;
        this.ariaBy = ariaBy;
        this.buildClass();
        return this;
    }

    public static disableAutoIdentifier = () => {
        BComponent.autoIdentifier = false;
    }

    /** Animations */
    public getSelector = (): JQuery => {
        return $(IdentifierFactory.getSelector(this.id));
    }

    /** Toggle / Hide / Show */
    public toggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().toggle(duration, callback);
    }

    public hide = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().hide(duration, callback);
    }

    public show = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().show(duration, callback);
    }

    /** FadeToggle / FadeIn / FadeOut / FadeTo */
    public fadeToggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeToggle(duration, callback);
    }

    public fadeIn = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeIn(duration, callback);
    }

    public fadeOut = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeOut(duration, callback);
    }

    public fadeTo = (duration: string | number = 400, opacity: number = 0, callback?: Function): JQuery => {
        return this.getSelector().fadeTo(duration, opacity, callback);
    }

    /** SlideToggle, SlideDown, SlideUp */
    public slideToggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideToggle(duration, callback);
    }

    public slideDown = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideDown(duration, callback);
    }

    public slideUp = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideUp(duration, callback);
    }
}

export type DisplayType = "default" | "primary" | "success" | "info" | "warning" | "danger";

export type DisplaySize = "lg" | "sm" | "xs";