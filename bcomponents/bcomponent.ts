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

export interface AttributesInterface {
    class: string;
    id: string;
    classes: string;
    styles: string;
    name: string;
    aria: string;
    ariaBy: string;
}

@Directive({
    selector: "[bcomponent-attributes]"
})
export class BComponentAttributes {
    private el: ElementRef;

    @Input('bcomponent-attributes') attributes: AttributesInterface;

    constructor(el: ElementRef) {
        this.el = el;
    }

    public setAttribute = (attribute: string, value: string) => {
        this.el.nativeElement.setAttribute(attribute, value);
    }

    public setAttributes = (attributes: AttributesInterface) => {
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

export class BComponent implements AttributesInterface{
    /** id attribute */
    public id: string;
    /** class attribute */
    public classes: string;
    /** style attribute */
    public styles: string;
    /** name attribute */
    public name: string;
    /** aria attribute */
    public aria: string;
    /** aria-labelledby attribute */
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

    /**
     * Initialize the component attributes
     * @param {string} id - Id attribute for the component
     * @param {string} classes - Class attribute for the component
     * @param {string} styles - Style attribute for the component
     * @param {string} name - Name attribute for the component
     * @param {string} aria - Aria attribute for the component
     * @param {string} ariaBy - Aria-labelledby attribute for the component
     * @returns {this} - Returns this object
     */
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

    /**
     * Disable auto identifiers for BComponents
     */
    public static disableAutoIdentifier = () => {
        BComponent.autoIdentifier = false;
    }

    /**
     * Get the JQuery selector for the component
     * @returns {JQuery} - JQuery selector for the element
     */
    public getSelector = (): JQuery => {
        return $(IdentifierFactory.getSelector(this.id));
    }

    /**
     * Toggle the component. Hide/show
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public toggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().toggle(duration, callback);
    }

    /**
     * Hide the component
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public hide = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().hide(duration, callback);
    }

    /**
     * Show the component
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public show = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().show(duration, callback);
    }

    /**
     * Fade toggle the component
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public fadeToggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeToggle(duration, callback);
    }

    /**
     * Fade the component into view
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public fadeIn = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeIn(duration, callback);
    }

    /**
     * Fade the component out of view
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public fadeOut = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().fadeOut(duration, callback);
    }

    /**
     * Fade the component to an opacity
     * @param {string|number} duration - Duration of the Animations
     * @param {number} opacity - Opacity to fade to
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public fadeTo = (duration: string | number = 400, opacity: number = 0, callback?: Function): JQuery => {
        return this.getSelector().fadeTo(duration, opacity, callback);
    }

    /**
     * Slide toggle the element
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public slideToggle = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideToggle(duration, callback);
    }

    /**
     * Slide the component into view
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public slideDown = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideDown(duration, callback);
    }

    /**
     * Slide the component out of view
     * @param {string|number} duration - Duration of the Animations
     * @param {Function?} callback - Callback on animation completion
     * @returns {JQuery} - JQuery selector for the component
     */
    public slideUp = (duration: string | number = 400, callback?: Function): JQuery => {
        return this.getSelector().slideUp(duration, callback);
    }
}

/**
 * Display types for Bootstrap components
 */
export type DisplayType = "default" | "primary" | "success" | "info" | "warning" | "danger";

/**
 * Display sizes for Bootstrap components
 */
export type DisplaySize = "lg" | "sm" | "xs";