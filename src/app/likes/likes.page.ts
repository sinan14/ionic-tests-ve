import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from '../components/popup/popup.component';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async open() {
    const modal = await this.modalCtrl.create({
      component: PopupComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        paramTitle: 'Likes page',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam suscipit sed doloremque quas quae molestiae iure tenetur, perspiciatis voluptas fugiat deserunt. Exercitationem animi a enim itaque sequi! Corrupti, sint quod!',
      },
    });
    return await modal.present();
  }
}
