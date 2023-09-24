import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  email: string = ''
  password: string = ''
  
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {  }

  login(): void {
    this.clientService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
        if(data && data.id){
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
