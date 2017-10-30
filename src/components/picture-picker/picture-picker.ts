import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';

@Component({
  selector: 'picture-picker',
  templateUrl: 'picture-picker.html'
})
export class PicturePickerComponent {

  profilePicture: string = null;

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 100,
    targetHeight: 100
  };

  constructor(private camera: Camera,
              public modal: ModalController) {
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
      this.profilePicture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err);
    });
  }
}
