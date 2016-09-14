import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

export class ComponentFactory {
    static loadComponent = (component: any, view: ViewContainerRef, factory: ComponentFactoryResolver) => {
        const contentComponent = factory.resolveComponentFactory(component);
        view.createComponent(contentComponent);
    }

    static copy = (base: Object, copyObject: Object) => {
        var props = Object.getOwnPropertyNames(copyObject);
        props.forEach((prop) => {
            base[prop] = copyObject[prop];
        });
        return base;
    }
}