import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  modalTitle = '';
  modalDescription = '';
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.modalTitle = this.navParams.data.paramTitle;
    this.modalDescription = this.navParams.data.desc;
  }
  close() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/']);
  }
}
