import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MapPage } from "./map";
import { GoogleMapMyPositionModule } from "../../components/google-map-my-position/google-map-my-position.module";

@NgModule({
  declarations: [
    MapPage
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    TranslateModule.forChild(),
    GoogleMapMyPositionModule
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule {

}
