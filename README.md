# ng-bcomponents
This project is a collection of bootstrap components (bcomponents) as angular 2 components. Instead of having to write nested markup for a bootstrap heading, you would use `<heading-bcomponent [title]="'My awesome heading'"></heading-bcomponent>`.

You can visit the [angular2-bootstrap-components-demo project](https://github.com/cpamp21/angular2-bootstrap-components-demo) for a complete usage example.

## Installation and Usage
### npm
To install with npm run the following command:  
`npm i ng-bcomponents`  

For SystemJS add this to your systemjs.config.js file:  
```javascript
var map = {
    // Your other libraries here
    'ng-bcomponents':                'node_modules/ng-bcomponents'
};
var packages = {
    // Your other libraries here
    'ng-bcomponents':                { main: 'index.js', defaultExtension: 'js' }
};
var config = {
    map: map,
    packages: packages,
    defaultJSExtensions: true
};
System.config(config);
```

### Usage
To import a component simply import the one of the classes listed below like this:  
```typescript
import {ButtonBComponent} from 'ng-bcomponents`;  
import {LinkBComponent} from 'ng-bcomponents`;  
```

## BComponents
The components in this project are called bcomponents and all tags are suffixed with `-bcomponent`.

### BComponent
All `ng-bcomponents` extend `BComponent`  
Class: `BComponent`  
Selector: none  
Inputs:
```typescript
id: string
classes: string
styles: string
name: string
aria: string
ariaBy: string
bcomponent: any = null
```
Api:  
```typescript
static disableAutoIdentifier: () => void
InitializeAttributes: (id: string = "", classes: string = "", styles: string = "", name: string = "", aria: string = "", ariaBy: string = "") => BComponent

// Jquery animations*
getSelector:    () => JQuery
toggle:         (duration: string | number = 400, callback?: Function) => JQuery
hide:           (duration: string | number = 400, callback?: Function) => JQuery
show:           (duration: string | number = 400, callback?: Function) => JQuery
fadeToggle:     (duration: string | number = 400, callback?: Function) => JQuery
fadeIn:         (duration: string | number = 400, callback?: Function) => JQuery
fadeOut:        (duration: string | number = 400, callback?: Function) => JQuery
fadeTo:         (duration: string | number = 400, callback?: Function) => JQuery
slideToggle:    (duration: string | number = 400, callback?: Function) => JQuery
slideDown:      (duration: string | number = 400, callback?: Function) => JQuery
slideUp:        (duration: string | number = 400, callback?: Function) => JQuery
```
*Note: For the jQuery animations you must either provide an id input or have autoIdentifier set to true (default). AutoIdentifier is an opt out feature, to disable it call `BComponent.disableAutoIdentifier()` in the constructor of your NgModule class.

### DisplayType
Many components accept an input `type` of type `DisplayType`. DisplayType can be any of the following values, but note that some components do not use default or primary and will instead default to success: `default, primary, success, info, warning, danger`.

### DisplaySize
Many components accept an input `size` of type `DisplaySize`. Display size can be any of the following values: `sm, lg`.

### Alert
Class: `AlertBComponent`  
Selector: `alert-bcomponent`  
ng-content: `text`  
Inputs:
```typescript
text: string
dismissible: boolean = false
hidden: boolean = false
type: DisplayType = success
```

### Badge
Class: `BadgeBComponent`  
Selector: `badge-bcomponent`  
Inputs:
```typescript
value: number = 0
```
Api:
```typescript
setValue: (value: number) => void
increment: (by: number = 1) => void
decrement: (by: number = 1) => void
```

### Breadcrumb
Class: `BreadcrumbBComponent`  
Selector: `breadcrumb-bcomponent`  
Inputs:
```typescript
items: LinkBComponent[]
active: string
```

### Button
Class: `ButtonBComponent`  
Selector: `button-bcomponent`  
Inputs:
```typescript
text: string
type: DisplayType = "default"
click: () => void
```

### Button Group
Class: `ButtonGroupBComponent`  
Selector: `button-group-bcomponent`  
Inputs:  
```typescript
items: ButtonBComponent[]
size: DisplaySize
```

### Dropdown
Class: `ButtonBComponent`  
Selector: `dropdown-bcomponent`  
DropdownType:
```typescript
type DropdownType = "separator" | "header" | "default"
```
DropdownItem:
```typescript
type: DropdownType
text: string
link: string
```
Inputs:
```typescript
items: DropdownItem[]
title: string
```

### Heading
Class: `HeadingBComponent`  
Selector: `heading-bcomponent`  
Inputs:
```typescript
title: string
subtitle: string
size: number = 1
```

### Input Group
Class: `InputGroupBComponent`  
Selector: `input-group-bcomponent`  
Inputs:
```typescript
placeholder: string
model: string
size: DisplaySize
frontText: string
backText: string
frontButton: ButtonBComponent
backButton: ButtonBComponent
```

### Jumbotron
Class: `JumbotronBComponent`  
Selector: `Jumbotron-bcomponent`  
ng-content: `body`  
Inputs:
```typescript
title: string
subtitle: string
body: string
size: number
```

### Label
Class: `LabelBComponent`  
Selector: `label-bcomponent`  
ng-content: `text`  
Inputs:
```typescript
text: string
type: DisplayType
```

### Link
Class: `LinkBComponent`  
Selector: `link-bcomponent`  
ng-content: `text`  
Inputs:
```typescript
text: string
link: string
```

### List Group
Class: `ListGroupBComponent`  
Selector: `list-group-bcomponent`  
ListGroupItem:
```typescript
text: string
badge: BadgeBComponent
link: string
active: boolean
constructor(text: string, badge: BadgeBComponent = null, link: string = "", active: boolean = false)
```
Inputs:
```typescript
items: ListGroupItem[]
linked: boolean = false
```

### Media
Class: `MediaBComponent`  
Selector: `media-bcomponent`  
ng-content: `body`  
```typescript
type VerticalAlignment = "left" | "right"
type HorizontalAlignment = "top" | "middle" | "bottom"
```
MediaAlignment:
```typescript
vertical: VerticalAlignment = "left"
horizontal: HorizontalAlignment = "top"
```
Inputs:
```typescript
alignment: MediaAlignment
heading: string
body: string
link: string
src: string
alt: string
size: string
```

### Modal
Class: `ModalBComponent`  
Selector: `modal-bcomponent`  
ng-content:
```
modal-title: title
modal-body: body
modal-footer: footer
```
Inputs:
```typescript
fade: boolean = true
title: string
body: string
footer: string
```
Api:
```typescript
open:       () => void
close:      () => void
```

### Panel
Class: `PanelBComponent`  
Selector: `panel-bcomponent`  
ng-content: `body`  
Inputs:
```typescript
header: string
body: string
footer: string
type: DisplayType = "default"
```

### Progressbar
Class: `ProgressbarBComponent`  
Selector: `progressbar-bcomponent`  
Inputs:
```typescript
value: number = 0
type: DisplayType = "success"
display: string = "%"
displayPercent: boolean = true
striped: boolean = false
animated: boolean = false
minValue: number = 0
maxValue: number = 100
```

### Sidenav
The Sidenav BComponent works different from other BComponents. Pass a `Component` to the input `component` to load that component in the content portion of the template. Additionally, the component passed as input must be listed under the `entryComponents` property of your `NgModule`.  
Class: `SidenavBComponent`  
Selector: `sidenav-bcomponent`  
ng-content: `component`  
Inputs:
```typescript
component: any
brand: LinkBComponent
items: LinkBComponent[]
```

### Table
Class: `TableBComponent`  
Selector: `table-bcomponent`  
Inputs:
```typescript
items: any[]
headers: any[]
striped: boolean
```

### Thumbnail
Class: `ThumbnailBComponent`  
Selector: `thumbnail-bcomponent`  
ng-content:
```
thumbnail-body: body
thumbnail-footer: footer
```
Inputs:
```typescript
link: string
header: string
body: string
footer: string
src: string
alt: string
size: number = 3
```

### Well
Class: `WellBComponent`  
Selector: `well-bcomponent`  
ng-content: `text`  
Inputs:
```typescript
text: string
size: DisplaySize