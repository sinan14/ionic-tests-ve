import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor(private router: Router, private modalCtrl: ModalController) {}
  images: any = [];
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user === false) {
      this.close();
    } else {
      this.images = user.fileSource;
    }
  }
  close() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/profile']);
  }
}
