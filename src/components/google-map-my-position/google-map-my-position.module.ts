import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapMyPositionComponent } from './google-map-my-position';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    GoogleMapMyPositionComponent
  ],
  imports: [
    TranslateModule.forChild(),
    IonicModule
  ],
  providers: [
    GoogleMaps
  ],
  exports: [
    GoogleMapMyPositionComponent
  ]
})
export class GoogleMapMyPositionModule {
}
