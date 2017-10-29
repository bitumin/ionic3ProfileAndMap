import { NgModule } from '@angular/core';
import { PicturePickerComponent } from './picture-picker';
import { IonicModule } from "ionic-angular";

@NgModule({
  declarations: [
    PicturePickerComponent
  ],
  imports: [
      IonicModule
  ],
  exports: [
    PicturePickerComponent
  ]
})
export class PicturePickerModule {
}
