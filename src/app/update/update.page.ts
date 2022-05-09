import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private alertCtrl: AlertController,
    private _router: Router
  ) {}
  private hasError = false;
  public imageNotUploaded = false;
  public user: any;
  public images = [];
  public genders: string[] = ['male', 'female'];
  public cities: string[] = [
    'Hyderabad',
    'Bangalore',
    'Chennai',
    'Pune',
    'Mumbai',
  ];
  public interests: string[] = [
    'Gaming',
    'Sports',
    'Music',
    'Dancing',
    'Movies',
    'Clubs',
  ];
  form = this._fb.group({
    email: [
      null,
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    name: ['', [Validators.required, Validators.minLength(4)]],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    interests: ['', Validators.required],
    mobile: ['', Validators.required],

    file: [null],
    fileSource: [[], Validators.required],
  });
  isValid(controlName: any) {
    return (
      (this.form.get(controlName)!.invalid &&
        this.form.get(controlName)!.touched) ||
      (this.hasError && this.form.get(controlName).invalid)
    );
  }
  saveDetails() {
    console.log(`form ${this.form.invalid ? 'invalid' : 'valid'}`);
    console.log(this.form);

    console.log(this.form.value);
    if (this.form.invalid) {
      this.hasError = true;
      return;
    }
    this.saveToStorage();
  }
  saveToStorage() {
    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.showSuccessMessage();
  }
  get f() {
    return this.form.controls;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          console.log(event.target.result);
          const fileSource = this.form.get('fileSource')?.value;
          fileSource.push(event.target.result);
          this.form.patchValue({
            fileSource,
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  showSuccessMessage() {
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

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    if (!!this.user === false) {
      this.showMessage();
    } else {
      this.patchForm(this.user);
    }
  }
  delete(item) {
    let fileSource = this.form.get('fileSource')?.value;
    fileSource = fileSource.filter((e) => e !== item);
    this.form.patchValue({
      fileSource,
      file: '',
    });
    this.user.fileSource = fileSource;
    // localStorage.setItem('user', JSON.stringify(this.user));
  }
  patchForm({
    email,
    name,
    city,
    mobile,
    interests,
    gender,
    file,
    fileSource,
  }) {
    this.form.patchValue({
      email,
      name,
      gender,
      city,
      interests,
      file,
      fileSource,
      mobile,
    });
    console.log(this.form);
  }
  showMessage() {
    this.alertCtrl
      .create({
        header: 'Error',
        message: 'nothing to update',
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
        this._router.navigate(['/']);
      });
  }
}
