import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  ILatLng
} from '@ionic-native/google-maps';
import { AlertController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'google-map-my-position',
  templateUrl: 'google-map-my-position.html'
})
export class GoogleMapMyPositionComponent {

  myLatitude: string;
  myLongitude: string;
  map: GoogleMap;
  mapElement: HTMLElement;
  mapIsReady: boolean;

  constructor(public alertCtrl: AlertController,
              public platform: Platform,
              private googleMaps: GoogleMaps) {
    this.myLatitude = '-';
    this.myLongitude = '-';
  }

  ngAfterViewInit() {
    console.log('Loading Google Map...');
    // this setTimeout solves the blank map issue:
    // https://github.com/mapsplugin/cordova-plugin-googlemaps/issues/1472
    // https://github.com/mapsplugin/cordova-plugin-googlemaps/issues/256
    setTimeout(() => {
       this.loadMap();
    }, 100);
  }

  loadMap() {
    this.mapElement = document.getElementById('my-position-map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 0,
          lng: 0
        },
        zoom: 0
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
      this.mapIsReady = true;
    });
  }

  getMyPosition() {
    if (!this.mapIsReady) {
      this.showAlertMapNotReady();
      return;
    }

    this.map.getMyLocation().then((myLocation) => {

      this.myLatitude = myLocation.latLng.lat.toFixed(6);
      this.myLongitude = myLocation.latLng.lng.toFixed(6);

      let newPosition: ILatLng = {
        lat: myLocation.latLng.lat,
        lng: myLocation.latLng.lng
      };

      this.map.clear().then(() => {
        this.map.moveCamera({
          target: newPosition
        }).then(() => {
          this.map.setCameraZoom(11);
          this.map.addMarker({
            title: 'My Position',
            position: newPosition
          });
        });
      });

    });
  }

  showAlertMapNotReady() {
    let alert = this.alertCtrl.create({
      title: 'Map is not ready yet!',
      subTitle: 'Map is still loading, please wait.',
      buttons: ['OK']
    });
    alert.present();
  }
}
