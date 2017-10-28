import { NgModule } from '@angular/core';
import { ProfilePicturePickerComponent } from './profile-picture-picker/profile-picture-picker';
import { ProfileFormComponent } from './profile-form/profile-form';
import { GoogleMapMyPositionComponent } from './google-map-my-position/google-map-my-position';

@NgModule({
  declarations: [
    ProfilePicturePickerComponent,
    ProfileFormComponent,
    GoogleMapMyPositionComponent
  ],
  imports: [],
  exports: [
    ProfilePicturePickerComponent,
    ProfileFormComponent,
    GoogleMapMyPositionComponent
  ]
})
export class ComponentsModule {
}
