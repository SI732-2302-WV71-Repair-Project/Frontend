import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  email: string = ''
  password: string = ''
  client = {
    id: 0,
    firstName: '',
    lastName: '',
    cellphoneNumber: '',
    email: '',
    password: '',
    birthDate: null,
    gender: '',
    lastConnection: null,
    address: ''
  }
  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {  }

  login(): void {
    this.client.email=this.email;
    this.client.password=this.password;
    console.log(this.client);
    this.clientService.login(this.client).subscribe(
      (data) => {
        console.log(data);
        if(data && data.id){
          this.authService.setClientId(data.id);

          this.router.navigate(['/app-home', data.id])
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
