import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { PicturePickerComponent } from './picture-picker';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    PicturePickerComponent
  ],
  imports: [
    IonicModule
  ],
  providers: [
    Camera
  ],
  exports: [
    PicturePickerComponent
  ]
})
export class PicturePickerModule {
}
