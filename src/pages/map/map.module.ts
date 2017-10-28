import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleMapMyPositionComponent } from "../../components/google-map-my-position/google-map-my-position";
import { MapPage } from "./map";

@NgModule({
  declarations: [
    MapPage,
    GoogleMapMyPositionComponent
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule {

}
