import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalChoosePictureSourcePage } from './modal-choose-picture-source';

@NgModule({
  declarations: [
    ModalChoosePictureSourcePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalChoosePictureSourcePage),
  ],
})
export class ModalChoosePictureSourcePageModule {}
