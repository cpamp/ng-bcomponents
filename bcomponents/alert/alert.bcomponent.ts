import {Component, Directive, Input, ElementRef} from '@angular/core';
import {BComponent, BComponentInputs, DisplayType} from '../bcomponent';

export class AlertBase extends BComponent {
    @Input() text: string;
    @Input() dismissible: boolean = false;
    @Input() hidden: boolean = false;
    @Input() type: DisplayType = "success";

    constructor(el: ElementRef = void 0) {
        super("alert alert-success", el);
    }

    public Initialize = (text: string = "", dismissible: boolean = false, hidden: boolean = false, type: DisplayType = "success"): this => {
        this.text = text;
        this.dismissible = dismissible;
        this.hidden = hidden;
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngAfterChildViewInit = () => {
        if(this.hidden === true) { this.hide(0); }
    }

    ngOnChildChanges = () => {
        this.type = this.type === "default" || this.type === "primary" ? "success" : this.type;
        this.baseClass = "alert alert-" + this.type;
        if(this.dismissible) {
            this.baseClass += " alert-dismissible";
        }
    }

    /**
     * Show an alert that self dismisses
     * @param {number} ms - Number of milliseconds to show
     * @param {function?} showAnimation - Custom show animation
     * @param {function?} hideAnimation - Custom hide animation
     * @memberOf AlertBase
     */
    public showDismissing = (ms: number, showAnimation?: () => void, hideAnimation?: () => void) => {
        if(showAnimation === void 0) {
            this.show(0);
        } else {
            showAnimation();
        }

        if(hideAnimation === void 0) {
            setTimeout(() => {this.hide(0);}, ms);
        } else {
            setTimeout(hideAnimation, ms);
        }
    }

    public hasText = (): boolean => {
        return !this.isNull(this.text);
    }
}

@Component({
    selector: "bc-alert",
    templateUrl: "alert.bcomponent.html",
    inputs: BComponentInputs
})
export class AlertBComponent extends AlertBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-alert]",
    inputs: BComponentInputs
})
export class AlertBDirective extends AlertBase {
    constructor(el: ElementRef) { super(el); }
}