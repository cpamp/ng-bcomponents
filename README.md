# ng-bcomponents
This project is a collection of bootstrap components (bcomponents) as angular 2 components. Instead of having to write nested markup for a bootstrap heading, you would use `<heading-bcomponent [title]="'My awesome heading'"></heading-bcomponent>`. One major drawback to this approach is that it does not handle nested components. For example, you can not use a heading bcomponent within the body of your panel bcomponent body text. You can, however, provide the raw HTML for a heading within the panel body.

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

### DisplayType
Many components accept an input `type` of type `DisplayType`. DisplayType can be any of the following values, but note that some components do not use default or primary and will instead default to success: `default, primary, success, info, warning, danger`.

### DisplaySize
Many components accept an input `size` of type `DisplaySize`. Display size can be any of the following values: `sm, lg`.

### Alert
Class: `AlertBComponent`  
Selector: `alert-bcomponent`  
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
type: DisplayType
click: () => void
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
Inputs:
```typescript
text: string
type: DisplayType
```

### Link
Class: `LinkBComponent`  
Selector: `link-bcomponent`  
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

### Panel
Class: `PanelBComponent`  
Selector: `panel-bcomponent`  
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
Inputs:
```typescript
text: string
size: DisplaySize