import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isUserLoggedIn: boolean = false

  constructor() {
    window.addEventListener('userLoggedIn', () => {
      this.isUserLoggedIn = true;
    });

    window.addEventListener('userLoggedOut', () => {
      this.isUserLoggedIn = false;
    });
  }

  setLoginStatus(status: boolean): void {
    this.isUserLoggedIn = status
  }
}
