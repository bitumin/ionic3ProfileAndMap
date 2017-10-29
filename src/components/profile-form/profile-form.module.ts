import { NgModule } from '@angular/core';
import { ProfileFormComponent } from './profile-form';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from "ionic-angular";

@NgModule({
  declarations: [
    ProfileFormComponent,
  ],
  imports: [
    TranslateModule.forChild(),
    IonicModule
  ],
  exports: [
    ProfileFormComponent,
  ]
})
export class ProfileFormModule {
}
