import {Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';
import {ComponentFactory} from '../component.factory';

export class SidenavDropdownItem {
    public header: string;
    public link: LinkBComponent;

    constructor(link: LinkBComponent = null, header: string = null) {
        this.link = link;
        this.header = header;
    }

    public isHeader = (): boolean => {
        return this.header != null;
    }
}

export class SidenavItem {
    public link: LinkBComponent;
    public dropdownItems: SidenavDropdownItem[];
    public text: string;

    constructor(link: LinkBComponent = null, text: string = "", dropdownItems: SidenavDropdownItem[] = null) {
        this.link = link;
        this.dropdownItems = dropdownItems;
        this.text = text;
    }

    public isDropdown = (): boolean => {
        return this.dropdownItems != null;
    }
}

@Component({
    selector: "sidenav-bcomponent",
    templateUrl: "sidenav.bcomponent.html",
    styles: [`/deep/ body{position:relative;overflow-x:hidden}/deep/ body,html{height:100%}/deep/ .nav .open>a{background-color:transparent}/deep/ .nav .open>a:hover{background-color:transparent}/deep/ .nav .open>a:focus{background-color:transparent}/deep/ #wrapper{-moz-transition:all .5s ease;-o-transition:all .5s ease;-webkit-transition:all .5s ease;padding-left:0;transition:all .5s ease}/deep/ #wrapper.toggled{padding-left:220px}/deep/ #wrapper.toggled #sidebar-wrapper{width:220px}/deep/ #wrapper.toggled #page-content-wrapper{margin-right:-220px}/deep/ #sidebar-wrapper{-moz-transition:all .5s ease;-o-transition:all .5s ease;-webkit-transition:all .5s ease;background:#1a1a1a;height:100%;left:220px;margin-left:-220px;overflow-x:hidden;overflow-y:auto;transition:all .5s ease;width:0;z-index:1000}/deep/ #sidebar-wrapper::-webkit-scrollbar{display:none}/deep/ #page-content-wrapper{width:100%}/deep/ .sidebar-nav{list-style:none;margin:0;padding:0;position:absolute;top:0;width:220px}/deep/ .sidebar-nav li{display:inline-block;line-height:30px;position:relative;width:100%}/deep/ .sidebar-nav li:before{content:'';height:100%;left:0;position:absolute;top:0;transition:width .2s ease-in;width:3px;z-index:-1;background-color:#36f}/deep/ .sidebar-nav .sidebar-brand:before{background-color:#1a1a1a;color:#fff}/deep/ .sidebar-nav li:hover:before{transition:width .2s ease-in;width:100%}/deep/ .sidebar-nav li a{color:#999;display:block;text-decoration:none;text-indent:20px}/deep/ .sidebar-nav li.open:hover before{transition:width .2s ease-in;width:100%}/deep/ .sidebar-nav .dropdown-toggle{padding:0;color:#999}/deep/ .sidebar-nav .dropdown li{padding:0}/deep/ .sidebar-nav .dropdown-menu{background-color:#222;border-radius:0;border:none;box-shadow:none;margin:0;padding:0;position:relative;width:100%}/deep/ .sidebar-nav .dropdown-menu li{padding-left:15px}/deep/ .sidebar-nav .dropdown-header{display:block;background-color:#1a1a1a}.sidebar-nav li a:active,.sidebar-nav li a:focus,.sidebar-nav li.open a:active,.sidebar-nav li.open a:focus,.sidebar-nav li.open a:hover,/deep/ .sidebar-nav li a:hover{background-color:transparent;color:#fff;text-decoration:none}/deep/ .sidebar-nav>.sidebar-brand{font-size:20px;height:65px;line-height:44px}.hamburger.is-closed:before,.hamburger.is-open:before{color:#000;content:'';font-size:14px;line-height:32px;text-align:center}.hamburger{opacity:.65!important;background:#999;border-radius:10px;border:none;display:block;height:42px;margin-left:15px;position:fixed;top:20px;width:42px;z-index:999}.hamburger:hover{outline:0;background:#d9d9d9}.hamburger:active,.hamburger:focus{outline:0}.hamburger.is-closed:before{-webkit-transform:translate3d(0,0,0);-webkit-transition:all .35s ease-in-out;display:block;opacity:0;width:100px}.hamburger.is-closed:hover before{-webkit-transform:translate3d(-100px,0,0);-webkit-transition:all .35s ease-in-out;display:block}.hamburger.is-closed:hover .hamb-top{-webkit-transition:all .35s ease-in-out;top:5px}.hamburger.is-closed:hover .hamb-bottom{-webkit-transition:all .35s ease-in-out;bottom:5px}.hamburger.is-closed .hamb-top{-webkit-transition:all .35s ease-in-out;background-color:rgba(0,0,0,.7);top:10px}.hamburger.is-closed .hamb-middle{background-color:rgba(0,0,0,.7);margin-top:-2px;top:50%}.hamburger.is-closed .hamb-bottom{-webkit-transition:all .35s ease-in-out;background-color:rgba(0,0,0,.7);bottom:10px}.hamburger.is-open .hamb-bottom,.hamburger.is-open .hamb-top{-webkit-transition:-webkit-transform .2s cubic-bezier(.73,1,.28,.08);margin-top:-2px;top:50%}.hamburger.is-closed .hamb-bottom,.hamburger.is-closed .hamb-middle,.hamburger.is-closed .hamb-top,.hamburger.is-open .hamb-bottom,.hamburger.is-open .hamb-middle,.hamburger.is-open .hamb-top{height:4px;left:20%;position:absolute;width:60%;opacity:1}.hamburger.is-open .hamb-top{-webkit-transform:rotate(45deg);background-color:#000}.hamburger.is-open .hamb-middle{background-color:#000;display:none}.hamburger.is-open .hamb-bottom{-webkit-transform:rotate(-45deg);background-color:#000}.hamburger.is-open:before{-webkit-transform:translate3d(0,0,0);-webkit-transition:all .35s ease-in-out;display:block;opacity:0;width:100px}.hamburger.is-open:hover before{-webkit-transform:translate3d(-100px,0,0);-webkit-transition:all .35s ease-in-out;display:block;opacity:1}.overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);z-index:1}`],
    inputs: BComponentInputs
})
export class SidenavBComponent extends BComponent {
    @Input() component: any;
    @Input() brand: LinkBComponent;
    @Input() items: SidenavItem[];
    @Input() menuButton: boolean = true;
    @Input() overlay: boolean = true;
    @Input() startOpen: boolean = true;

    private isClosed = true;

    @ViewChild("contentComponent", { read: ViewContainerRef }) contentComponent: ViewContainerRef;

    constructor(private cfr: ComponentFactoryResolver) {
        super(null);
    }

    public ngOnChildInit = () => {
        if(this.hasContent()) {
            ComponentFactory.loadComponent(this.component, this.contentComponent, this.cfr);
        }
        if(this.startOpen) {
            this.toggleNav();
        }
    }

    ngOnChildChanges = () => {
        this.id = "wrapper";
    }

    public Initialize = (component: any = null, brand: LinkBComponent = null, items: SidenavItem[] = [], menuButton: boolean = true, overlay: boolean = true, startOpen: boolean = true) => {
        this.component = component;
        this.brand = brand;
        this.items = items;
        this.menuButton = menuButton;
        this.overlay = overlay;
        this.startOpen = startOpen;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public hasBrand = (): boolean => {
        return !this.isNull(this.brand);
    }

    public hasContent = (): boolean => {
        return !this.isNull(this.component);
    }

    public toggleNav = () => {
        var overlay = $('.overlay');
        if (this.isClosed == true) {
            if(this.overlay) { overlay.hide(); }
        } else {
            if(this.overlay) { overlay.show(); }
        }
        this.isClosed = !this.isClosed;
    }
}