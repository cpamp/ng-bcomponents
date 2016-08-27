import {Component, ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';
import {ComponentFactory} from '../component.factory';

@Component({
    selector: "sidenav-bcomponent",
    templateUrl: "sidenav.bcomponent.html",
    styles: [`/*!
 * Start Bootstrap - Simple Sidebar (http://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */.sidebar-nav li a,.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration:none}body{overflow-x:hidden}#wrapper{padding-left:0;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}#wrapper.toggled{padding-left:250px}#sidebar-wrapper{z-index:1000;position:fixed;left:250px;width:0;height:100%;margin-left:-250px;overflow-y:auto;background:#000;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}#wrapper.toggled #sidebar-wrapper{width:250px}#page-content-wrapper{width:100%;position:absolute;padding:15px}#wrapper.toggled #page-content-wrapper{position:absolute;margin-right:-250px}.sidebar-nav{position:absolute;top:0;width:250px;margin:0;padding:0;list-style:none}.sidebar-nav li{text-indent:20px;line-height:40px}.sidebar-nav li a{display:block;color:#999}.sidebar-nav li a:hover{text-decoration:none;color:#fff;background:rgba(255,255,255,.2)}.sidebar-nav>.sidebar-brand{height:65px;font-size:18px;line-height:60px}.sidebar-nav>.sidebar-brand a{color:#999}.sidebar-nav>.sidebar-brand a:hover{color:#fff;background:0 0}@media(min-width:768px){#wrapper{padding-left:250px}#wrapper.toggled{padding-left:0}#sidebar-wrapper{width:250px}#wrapper.toggled #sidebar-wrapper{width:0}#page-content-wrapper{padding:20px;position:relative}#wrapper.toggled #page-content-wrapper{position:relative;margin-right:0}}`],
    directives: [BComponentAttributes, LinkBComponent],
    inputs: BComponentInputs.concat('component', 'brand', 'items')
})
export class SidenavBComponent extends BComponent {
    public component: any;
    public brand: LinkBComponent;
    public items: LinkBComponent[];

    @ViewChild("contentComponent", { read: ViewContainerRef }) contentComponent: ViewContainerRef;

    constructor(private cfr: ComponentFactoryResolver) {
        super(null);
    }

    public ngOnChildInit = () => {
        if(this.hasContent()) {
            ComponentFactory.loadComponent(this.component, this.contentComponent, this.cfr);
        }
    }

    public Initialize = (component: any = null, brand: LinkBComponent = null, items: LinkBComponent[] = []) => {
        this.component = component;
        this.brand = brand;
        this.items = items;
    }

    public hasBrand = (): boolean => {
        return !this.isNull(this.brand);
    }

    public hasContent = (): boolean => {
        return !this.isNull(this.component);
    }

    public toggleNav = () => {
        $("#wrapper").toggleClass("toggled");
    }
}