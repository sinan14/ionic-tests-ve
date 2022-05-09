import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SliderComponent } from '../components/slider/slider.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }
  delete(item) {
    let fileSource = this.user.fileSource;
    fileSource = fileSource.filter((e) => e !== item);
    this.user.fileSource = fileSource;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  async openSlider() {
    const modal = await this.modalCtrl.create({
      component: SliderComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
}
