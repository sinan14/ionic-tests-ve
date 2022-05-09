import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: 'main', icon: 'mail' },
    { title: 'Profile', url: 'profile', icon: 'person' },
    { title: 'Favorites', url: 'likes', icon: 'heart' },
    { title: 'Visit', url: 'visit', icon: 'archive' },
    { title: 'Update', url: 'update', icon: 'warning' },
  ];
  constructor() {}
}
