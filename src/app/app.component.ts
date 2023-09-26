import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public isUserLoggedIn: boolean = false;

  constructor() { }

  setLoginStatus(status: boolean):void{
    this.isUserLoggedIn = status;
  }
}
