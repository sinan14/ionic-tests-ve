import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.page.html',
  styleUrls: ['./new-home.page.scss'],
})
export class NewHomePage implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  constructor(private router: Router, private alertCtrl: AlertController) {}
  emailReg = /^[a-z0-9.%+]+@[a-z09.-]+\.[a-z]{2,4}/;
  hasError = false;
  attempted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    city: new FormControl(null, Validators.required),
    mobile: new FormControl(null, [Validators.required]),
    interests: new FormControl(null, [Validators.required]),
    photos: new FormControl(null),
  });
  isInvalid(controlName: any) {
    return (
      (this.form.get(controlName)!.invalid &&
        this.form.get(controlName)!.touched) ||
      (this.hasError && this.form.get(controlName).invalid)
    );
  }

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  invalidForm = false;
  updatingDetails = false;
  cities: string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Pune', 'Mumbai'];
  // user: any = {
  //   name: '',
  //   email: '',
  //   gender: '',
  //   city: '',
  //   mobile: '',
  //   interests: [],
  //   photos: [],
  // };
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
    // this.onUpdate();
    // if (!!user) {
    //   this.user = user;
    //   this.updatingDetails = true;
    // }
  }
  emailFormatError = false;
  submit() {
    if (this.getFiles().length === 0) {
      this.attempted = true;
    } else {
      this.attempted = false;
    }
    console.log(this.form);

    if (this.form.invalid) {
      this.hasError = true;
      return;
    }
    this.hasError = false;
    console.log(this.form.value);
    this.processImages();
    this.showAlert();
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
  showAlert() {
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
        console.log(this.form.value);
        this.saveInLocalStorage();
        alertEl.present();
        this.saveInLocalStorage();
        console.log('saved');
      });
  }

  processImages() {
    const images = this.getFiles();
    const photos = [];
    images.forEach(async (file, index) => {
      await photos.push(file.rawFile);
    });

    console.log(photos);
    const imageOnly = [];
    photos.forEach((file, index) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      const Img = new Image();
      Img.src = URL.createObjectURL(file);
      Img.onload = (e: any) => {
        const content = reader.result as string;
        imageOnly.push({ src: content, name: file.name });
        localStorage.setItem('imageOnly', JSON.stringify(imageOnly));
      };
    });
  }
  saveInLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.form.value));
  }
  getPhoto(base64) {
    console.log(base64);

    // var base64 = localStorage["file"];
    var base64Parts = base64.split(',');
    var fileFormat = base64Parts[0].split(';')[1];
    var fileContent = base64Parts[1];
    var file = new File([fileContent], 'file name here', { type: fileFormat });
    return file;
  }

  onUpdate() {
    const photos = JSON.parse(localStorage.getItem('imageOnly'));
    const images = [];
    photos.forEach((item) => {
      const image = this.getPhoto(item.src);
      images.push(image);
      this.setInput(images);
    });
    console.log(images);
  }
  setInput(files) {
    // console.log(this.myInputVariable.nativeElement.files);
    // this.myInputVariable.nativeElement.value = files;
    //@ts-ignore
    document.getElementById('photoInput').value = files;
    // console.log(this.myInputVariable.nativeElement.files);
  }
}
