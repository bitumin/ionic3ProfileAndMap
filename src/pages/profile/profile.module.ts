import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProfilePage } from "./profile";
import { ProfileFormModule } from "../../components/profile-form/profile-form.module";
import { PicturePickerModule } from "../../components/picture-picker/picture-picker.module";

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild(),
    ProfileFormModule,
    PicturePickerModule
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {

}
