# Angular JSON Viewer component

Angular JSON Viewer component. Collapsible JSON in HTML with syntax highlight like in ie. Chrome DevTools

This is a fork of the [t-json-viewer](https://github.com/temich666/t-json-viewer) component, with some extra features and a bit different look.

## Install

```
npm install agm-json-viewer --save
```

## Usage

Import AgmJsonViewerModule to have access to following component
```js
import { AgmJsonViewerModule } from 'agm-json-viewer';

@NgModule({
    ...,
    imports: [
        ...,
        AgmJsonViewerModule,
        ...
    ],
    ...
})
export class AppModule { }
```

### Component

 Takes an input `[json]` that can be data bound to any object.

```js

@Component({
  ...,
  template: `
    <agm-json-viewer [json]="asset"></agm-json-viewer>
  `
  })
  export class MyComponent {
    ...
    ngOnInit() {
      this.asset = {};
      ...
    }
    ...
  }
```
