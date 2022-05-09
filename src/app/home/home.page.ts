import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // form: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required]),
  //   name: new FormControl(null, [Validators.required]),
  //   gender: new FormControl(null, [Validators.required]),

  //   mobile: new FormControl(null, [Validators.required]),
  //   cities: new FormControl(null, [Validators.required]),
  //   interests: new FormControl(null, [Validators.required]),
  // });

  constructor(private router: Router, private alertCtrl: AlertController) {}

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  invalidForm = false;
  updatingDetails = false;
  cities: string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Pune', 'Mumbai'];
  user: any = {
    name: '',
    email: '',
    gender: '',
    city: '',
    mobile: '',
    interests: [],
    photos: [],
  };
  interests: string[] = [
    'Gaming',
    'Sports',
    'Music',
    'Dancing',
    'Movies',
    'Clubs',
  ];

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user) {
      this.user = user;
      this.updatingDetails = true;
    }
  }
  emailFormatError = false;
  submit(form) {
    console.log(form);
    if (form.controls.name.status) this.emailFormatError = true;
    if (form.invalid) {
      this.invalidForm = true;
      return;
    }
    if (this.user.interests.length === 0) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;
    this.emailFormatError = false;
    const images = this.getFiles();
    const phots = [];
    images.forEach(async (file, index) => {
      await phots.push(file.rawFile);
    });

    console.log(phots);
    // this.user.photos = phots;

    const imageOnly = [];
    phots.forEach((file, index) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      const Img = new Image();
      Img.src = URL.createObjectURL(file);
      Img.onload = (e: any) => {
        let content = reader.result as string;
        console.log(typeof content);
        imageOnly.push({ src: content, name: file.name });
        localStorage.setItem('imageOnly', JSON.stringify(imageOnly));
      };
    });

    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));

    this.alertCtrl
      .create({
        header: 'Success',
        message: 'Details saved',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Ok',
            role: 'ok',
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }
  reorderFiles(reorderEvent: CustomEvent): void {
    let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
  }
}
