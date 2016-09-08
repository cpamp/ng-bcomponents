# ng-bcomponents
This project is a collection of bootstrap components (bcomponents) as angular 2 components. Instead of having to write nested markup for a bootstrap heading, you would use `<bc-heading [title]="'My awesome heading'"></bc-heading>`.

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
Import the `NgBComponentsModule` into your app module and add it to your app module's imports
```typescript
import {NgBComponentsModule} from 'ng-bcomponents';
@NgModule({
    imports: [NgBComponentsModule]
})
export class AppModule {}
```