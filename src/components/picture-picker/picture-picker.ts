import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'picture-picker',
  templateUrl: 'picture-picker.html'
})
export class PicturePickerComponent {

  profilePicture: SafeUrl = null;

  cameraOptions: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 100,
    targetHeight: 100,
    allowEdit : true,
    saveToPhotoAlbum: false
  };

  constructor(private camera: Camera,
              public modal: ModalController,
              private domSanitizer: DomSanitizer) {
  }

  openPickerModeModal() {
    const modalChooseSource: Modal = this.modal.create('ModalChoosePictureSourcePage');

    modalChooseSource.present();

    modalChooseSource.onDidDismiss((data) => {
      if (typeof data.source === 'undefined') {
        return;
      }

      switch (data.source) {
        case 'localFile':
          this.cameraOptions.sourceType = PictureSourceType.PHOTOLIBRARY;
          break;
        case 'camera':
          this.cameraOptions.sourceType = PictureSourceType.CAMERA;
          break;
        default:
          return;
      }
      this.getPicture();
    })
  }

  getPicture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.profilePicture = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.error(err);
    });
  }
}
