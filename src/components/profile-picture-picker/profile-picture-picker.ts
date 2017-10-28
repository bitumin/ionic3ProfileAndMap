import { Component } from '@angular/core';

/**
 * Generated class for the ProfilePicturePickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-picture-picker',
  templateUrl: 'profile-picture-picker.html'
})
export class ProfilePicturePickerComponent {

  text: string;

  constructor() {
    console.log('Hello ProfilePicturePickerComponent Component');
    this.text = 'Hello World';
  }

}
