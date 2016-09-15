import {Directive, ElementRef, Input, ViewContainerRef, ComponentFactoryResolver, SimpleChange} from '@angular/core';
import {ComponentFactory} from './component.factory';
import {IdentifierFactory} from './identifier.factory';

export const BComponentInputs = [
    'bcId',
    'bcClass',
    'bcStyle',
    'bcName',
    'bcAria',
    'bcAriaBy',
    'bcomponent'
];

export interface AttributesInterface {
    class: string;
    bcId: string;
    bcClass: string;
    bcStyle: string;
    bcName: string;
    bcAria: string;
    bcAriaBy: string;
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
        $(this.el.nativeElement).attr(attribute, value);
    }

    public setAttributes = (attributes: AttributesInterface) => {
        if(attributes.class != null) this.setAttribute("class", attributes.class);
        if(attributes.bcId != null) this.setAttribute("id", attributes.bcId);
        if(attributes.bcStyle != null) this.setAttribute("style", attributes.bcStyle);
        if(attributes.bcName != null) this.setAttribute("name", attributes.bcName);
        if(attributes.bcAria != null) this.setAttribute("aria-label", attributes.bcAria);
        if(attributes.bcAriaBy != null) this.setAttribute("aria-labelledby", attributes.bcAriaBy);
    }

    ngOnChanges() {
        this.setAttributes(this.attributes);
    }
}

export class BComponent implements AttributesInterface{
    /** id attribute */
    public bcId: string;
    /** class attribute */
    public bcClass: string;
    /** style attribute */
    public bcStyle: string;
    /** name attribute */
    public bcName: string;
    /** aria attribute */
    public bcAria: string;
    /** aria-labelledby attribute */
    public bcAriaBy: string;

    protected bcomponent: any = null;

    protected self = this;
    protected baseClass: string;

    protected ngOnChildChanges: (change?: {[property: string]: SimpleChange}) => void;
    protected ngOnChildInit: () => void;
    protected ngAfterChildViewInit: () => void;

    public static autoIdentifier: boolean = true;

    public class: string;

    protected attributes: BComponentAttributes;

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
        if(this.isNull(this.bcId) && BComponent.autoIdentifier) {
            this.bcId = IdentifierFactory.getIdentifier();
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
            if(this.bcClass != null) {
                this.class +=  " " + this.bcClass;
            }
        } else {
            if(this.bcClass != null) {
                this.class = this.bcClass
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
        this.bcId = id;
        this.bcClass = classes;
        this.bcStyle = styles;
        this.bcName = name;
        this.bcAria = aria;
        this.bcAriaBy = ariaBy;
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
        return $(IdentifierFactory.getSelector(this.bcId));
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

export class BDirective {
    public el: ElementRef;
    public selector: JQuery;
    constructor(el: ElementRef) {
        this.el = el;
        this.selector = $(this.el.nativeElement);
    }

    public isNull = (value: any) => {
        return value == null;
    }

    public isNullOrEmpty = (value: string) => {
        return this.isNull(value) || value === '';
    }

    public addClass = (value: string) => {
        this.selector.addClass(value);
    }

    public addStyle = (style: string, value: string | number) => {
        this.selector.css(style, value);
    }

    public setAttribute = (attr: string, value: string) => {
        this.selector.attr(attr, value);
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

/**
 * Display Position
 */
export type DisplayPosition = "top" | "bottom" | "left" | "right";