import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public user = {
    name: "Lilian",
    email: "lilianscmt@gmail.com"
  }

  public appPages = [
    { title: 'lista de photocards', url: '/photocard-list', icon: 'book' },
    { title: 'meus photocards', url: '/my-photocard', icon: 'bookmarks' },
    { title: 'configurações', url: '/profile', icon: 'cog' },
    { title: 'sair', url: '/sair', icon: 'log-out' }
  ];
  constructor() {}
}
