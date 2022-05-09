import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(private _fb: FormBuilder, private alertCtrl: AlertController) {}
  private hasError = false;
  public imageNotUploaded = false;
  genders: string[] = ['male', 'female'];
  cities: string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Pune', 'Mumbai'];
  interests: string[] = [
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
  deselectImage(item) {
    let fileSource = this.form.get('fileSource')?.value;
    fileSource = fileSource.filter((e) => e !== item);
    this.form.patchValue({
      fileSource,
      file: '',
    });
  }

  ngOnInit() {}
}
