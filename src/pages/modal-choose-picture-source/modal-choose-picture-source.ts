import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-choose-picture-source',
  templateUrl: 'modal-choose-picture-source.html',
})
export class ModalChoosePictureSourcePage {

  constructor(private view: ViewController) {
  }

  dismissModal(source) {
    this.view.dismiss({
      source: source
    });
  }
}
