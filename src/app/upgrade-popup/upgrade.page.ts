import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.page.html',
  styleUrls: ['./upgrade.page.scss'],
})
export class UpgradePage implements OnInit {
  isOpenFlag: boolean;
  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.isOpenFlag = true;
  }

  close() {
    this.modalCtrl.dismiss();
    this.isOpenFlag = false;
    this.router.navigate(['/home']);
  }
}
