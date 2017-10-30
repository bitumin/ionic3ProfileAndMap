import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ModalChoosePictureSourcePage } from './modal-choose-picture-source';

@NgModule({
  declarations: [
    ModalChoosePictureSourcePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalChoosePictureSourcePage),
    TranslateModule.forChild(),
  ],
})
export class ModalChoosePictureSourcePageModule {}
