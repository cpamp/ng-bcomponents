import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

export class ComponentFactory {
    static loadComponent = (component: any, view: ViewContainerRef, factory: ComponentFactoryResolver) => {
        const contentComponent = factory.resolveComponentFactory(component);
        view.createComponent(contentComponent);
    }

    static copy = <T>(base: T, copyObject: T) => {
        for(var prop in copyObject) {
            base[prop] = copyObject[prop];
        }
        return base;
    }
}