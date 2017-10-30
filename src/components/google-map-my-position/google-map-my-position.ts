import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  ILatLng
} from '@ionic-native/google-maps';
import { AlertController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";


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
              private googleMaps: GoogleMaps,
              public translateService: TranslateService) {
    this.myLatitude = '-';
    this.myLongitude = '-';
  }

  ngAfterViewInit() {
    // this setTimeout solves a blank map on load issue:
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
            title:  this.translateService.instant('MODAL_CHOOSE_PICTURE_SOURCE.MY_POSITION'),
            position: newPosition
          });
        });
      });

    });
  }

  showAlertMapNotReady() {
    let alert = this.alertCtrl.create({
      title: this.translateService.instant('MODAL_CHOOSE_PICTURE_SOURCE.MAP_NOT_READY_ALERT_TITLE'),
      subTitle: this.translateService.instant('MODAL_CHOOSE_PICTURE_SOURCE.MAP_NOT_READY_ALERT_SUBTITLE'),
      buttons: ['OK']
    });
    alert.present();
  }
}
