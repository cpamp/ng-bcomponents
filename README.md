# angular2-bootstrap-components
This project is a collection of bootstrap components (bcomponents) as angular 2 components. Instead of having to write nested markup for a bootstrap heading, you would use `<heading-bcomponent [title]="'My awesome heading'"></heading-bcomponent>`. One major drawback to this approach is that it does not handle nested components. For example, you can not use a heading bcomponent within the body of your panel bcomponent body text. You can, however, provide the raw HTML for a heading within the panel body.

You can visit the [angular2-bootstrap-components-demo project](https://github.com/cpamp21/angular2-bootstrap-components-demo) for a complete usage example.

## BComponents
The components in this project are called bcomponents and all tags are suffixed with `-bcomponent`.

### DisplayType
Many components accept an input `type` which is of type `DisplayType`. DisplayType can be any of the following values, but note that some components do not use default or primary and will instead default to success: `default, primary, success, info, warning, danger`.

### Alert
Selector: `alert-bcomponent`  
Inputs:
```typescript
text: string
dismissible: boolean = false
hidden: boolean = false
type: DisplayType = success
```

### Badge
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
Selector: `breadcrumb-bcomponent`  
BreadcrumbItem:
```typescript
link: string
text: string
constructor(link: string, text: string)
```
Inputs:
```typescript
items: BreadcrumbItem[]
active: string
```

### Button
Selector: `button-bcomponent`  
Inputs:
```typescript
text: string
type: DisplayType
click: () => void
```

### Dropdown
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
Selector: `heading-bcomponent`  
Inputs:
```typescript
title: string
subtitle: string
size: number = 1
```

### Input Group
Selector: `input-group-bcomponent`  
Inputs:
```typescript
placeholder: string
model: string
size: DisplaySize
frontText: string
backText: string
frontClick: () => void
backClick: () => void
frontType: DisplayType = "default"
backType: DisplayType = "default"
```

### Jumbotron
Selector: `Jumbotron-bcomponent`  
Inputs:
```typescript
title: string
subtitle: string
body: string
size: number
```

### Label
Selector: `label-bcomponent`  
Inputs:
```typescript
text: string
type: DisplayType
```

### Link
Selector: `link-bcomponent`  
Inputs:
```typescript
text: string
link: string
```

### Panel
Selector: `panel-bcomponent`  
Inputs:
```typescript
header: string
body: string
footer: string
type: DisplayType = "default"
```

### Progressbar
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

### Table
Selector: `table-bcomponent`  
Inputs:
```typescript
items: any[]
headers: any[]
striped: boolean
```

### Thumbnail
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
Selector: `well-bcomponent`  
Inputs:
```typescript
text: string
size: DisplaySize