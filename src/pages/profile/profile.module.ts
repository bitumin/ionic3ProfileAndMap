import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from "./profile";
import { ProfileFormComponent } from "../../components/profile-form/profile-form";
import { ProfilePicturePickerComponent } from "../../components/profile-picture-picker/profile-picture-picker";

@NgModule({
  declarations: [
    ProfilePage,
    ProfileFormComponent,
    ProfilePicturePickerComponent
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {

}
