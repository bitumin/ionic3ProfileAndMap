import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular";
import { GoogleMapMyPositionComponent } from './google-map-my-position';

@NgModule({
  declarations: [
    GoogleMapMyPositionComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    GoogleMapMyPositionComponent
  ]
})
export class GoogleMapMyPositionModule {
}
