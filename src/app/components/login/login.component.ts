import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userType : string
  user = {
    id: 0,
    firstName: '',
    lastName: '',
    cellphoneNumber: '',
    email: '',
    password: '',
    birthDate: null,
    gender: '',
    lastConnection: new Date(),
    address: '',
    district: ''
  };

  hide = true;

  constructor(
    private clientService: ClientService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  )
  {
    this.userType = 'cliente'
  }

  ngOnInit(): void {  }

  toggleHide() {  // <-- Agregar este método
    this.hide = !this.hide;
  }

  login(): void {
    console.log('user', this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log(data);
        if(data && data.id){
          this.authService.setUserId(data.id)
          this.router.navigate(['/app-home', data.id])
          window.dispatchEvent(new Event('userLoggedIn'))
        }
        else{
          alert('Usuario o contraseña incorrectos')
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error)
      }
    )
  }

}
