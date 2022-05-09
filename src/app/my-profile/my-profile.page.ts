import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SliderComponent } from '../modals/slider/slider.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  user: any;
  images: any = [];
  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    console.log(this.user);
    this.images = JSON.parse(localStorage.getItem('imageOnly'));
    console.log(this.images);
  }
  slider() {
    this.open();
  }
  async open() {
    const modal = await this.modalCtrl.create({
      component: SliderComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
}
