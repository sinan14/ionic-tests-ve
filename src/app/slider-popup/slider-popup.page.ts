import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider-popup',
  templateUrl: './slider-popup.page.html',
  styleUrls: ['./slider-popup.page.scss'],
})
export class SliderPopupPage implements OnInit {
  isOpenFlag = true;
  constructor(private router: Router, private modalCtrl: ModalController) {}
  images: any = [];
  ngOnInit() {
    this.images = JSON.parse(localStorage.getItem('imageOnly'));
    // if (!!this.images === false) {
    //   this.close();
    // }
  }
  close() {
    this.modalCtrl.dismiss();
    this.isOpenFlag = false;
    this.router.navigate(['/my-profile']);
  }
  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
