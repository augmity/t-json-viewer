import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmJsonViewerComponent } from './agm-json-viewer.component/agm-json-viewer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AgmJsonViewerComponent
  ],
  exports: [
    AgmJsonViewerComponent
  ]
})
export class AgmJsonViewerModule { }
