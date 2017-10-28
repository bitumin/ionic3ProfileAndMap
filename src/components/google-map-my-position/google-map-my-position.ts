import { Component } from '@angular/core';

/**
 * Generated class for the GoogleMapMyPositionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map-my-position',
  templateUrl: 'google-map-my-position.html'
})
export class GoogleMapMyPositionComponent {

  text: string;

  constructor() {
    console.log('Hello GoogleMapMyPositionComponent Component');
    this.text = 'Hello World';
  }

}
