# angular2-bootstrap-components
This project is a collection of bootstrap components (bcomponents) as angular 2 components. Instead of having to write nested markup for a bootstrap heading, you would use `<heading-bcomponent [title]="'My awesome heading'"></heading-bcomponent>`. One major drawback to this approach is that it does not handle nested components. For example, you can not use a heading bcomponent within the body of your panel bcomponent body text. You can, however, provide the raw HTML for a heading within the panel body.

## BComponents
The components in this project are called bcomponents and all tags are suffixed with `-bcomponent`.

### DisplayType
Many components accept an input `type` which is of type `DisplayType`. DisplayType can be any of the following values, but note that some components do not use default or primary and will instead default to success: `default, primary, success, info, warning, danger`.

### Alert BComponent
Inputs:
```typescript
text: string
dismissible: boolean = false
hidden: boolean = false
type: DisplayType = success
```
Usage:
```html
<alert-bcomponent [text]="'<b>Dismissible</b>'" [type]="'default'" [dismissible]="true"></alert-bcomponent>
```

### Badge BComponent
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
Usage:
```html
<badge-bcomponent [value]="3"></badge-bcomponent>
```

### Breadcrumb BComponent
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
Usage:
```html
<breadcrumb-bcomponent [items]="breadcrumbItems" [active]="'Amazing'"></breadcrumb-component>
```

### Button BComponent
Inputs:
```typescript
text: string
type: DisplayType
click: () => void
```
Usage:
```html
<button-bcomponent [text]="'Click me baby'" [click]="btnClickDemo" [type]="'primary'"></button-bcomponent>
```