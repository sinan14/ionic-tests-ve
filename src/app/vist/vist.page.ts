import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from '../components/popup/popup.component';

@Component({
  selector: 'app-vist',
  templateUrl: './vist.page.html',
  styleUrls: ['./vist.page.scss'],
})
export class VistPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async open() {
    const modal = await this.modalCtrl.create({
      component: PopupComponent,

      componentProps: {
        paramTitle: 'Visit page',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam suscipit sed doloremque quas quae molestiae iure tenetur, perspiciatis voluptas fugiat deserunt. Exercitationem animi a enim itaque sequi! Corrupti, sint quod!',
      },
    });
    return await modal.present();
  }
}
