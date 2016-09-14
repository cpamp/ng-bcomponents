import {Component, Directive, ContentChild, ElementRef, Input} from '@angular/core';
import {BComponent, BDirective, BComponentInputs, DisplayType} from '../bcomponent';

@Directive({selector: "bc-panel-header"})
export class PanelHeaderBDirective {}

@Directive({selector: "bc-panel-body"})
export class PanelBodyBDirective {}

@Directive({selector: "bc-panel-footer"})
export class PanelFooterBDirective {}

export class PanelBase extends BComponent {
    @Input() header: string;
    @Input() body: string;
    @Input() footer: string;
    @Input() type: DisplayType = "default";

    @ContentChild(PanelHeaderBDirective) projectionHeader: any;
    @ContentChild(PanelBodyBDirective) projectionBody: any;
    @ContentChild(PanelFooterBDirective) projectionFooter: any;

    constructor(el: ElementRef = void 0) {
        super("panel panel-default", el);
    }

    public Initialize = (header: string = null, body: string = "", footer: string = null, type: DisplayType = "default"): this => {
        this.header = header;
        this.body = body;
        this.footer = footer;
        this.type = type;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "panel panel-" + this.type;
    }

    ngAfterChildViewInit = () => {
        console.log(this.projectionBody);
        console.log(this.projectionFooter);
        console.log(this.projectionHeader);
    }

    public hasBody = (): boolean => {
        return !this.isNull(this.body);
    }
}

@Component({
    selector: "bc-panel",
    templateUrl: "panel.bcomponent.html",
    inputs: BComponentInputs
})
export class PanelBComponent extends PanelBase {
    constructor() { super(); }
}

@Directive({
    selector: "[bc-panel]",
    inputs: BComponentInputs
})
export class PanelBDirective extends PanelBase {
    constructor(el: ElementRef) { super(el); }
}