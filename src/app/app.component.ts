import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'My profile', url: 'my-profile', icon: 'person' },
    { title: 'Likes', url: 'likes', icon: 'heart' },
    { title: 'Visit', url: 'visit', icon: 'archive' },
    // { title: 'edit', url: 'update', icon: 'paper-plane' },
  ];

  constructor() {}
}
