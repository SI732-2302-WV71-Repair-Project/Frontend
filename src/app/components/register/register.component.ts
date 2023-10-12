import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {Observable, of, switchMap} from "rxjs";
import {Client} from "../../models/client.model";
import {Technician} from "../../models/technician.model";
import {TechnicianService} from "../../services/technician.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role: string = 'cliente';
  specialty: string = '';

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

  passwordConfirm: string = '';

  constructor(
    private clientService:ClientService,
    private technicianService:TechnicianService,
    private userService:UserService,
    private authService:AuthService,
    private router: Router
  ) { }

  register(): void {
    console.log('user', this.user);
    this.userService.register(this.user).pipe(
      switchMap(user => {
        console.log('Usuario registrado',user);
        if (user && user.id) {

          //this.router.navigate(['/app-home', data.id]);
        } else {
          alert('Error al registrar usuario');
        }
        return of(user)
      })
    ).subscribe(
      (user) => {

        if(user){
          this.authService.setUserId(user.id);
          console.log(this.role)
          if(this.role == 'cliente'){
            const client: Client = {
              id: 0,
              user: user,
              plan: '1'
            };
            this.clientService.register(client).subscribe(
              (client) => {
                console.log('client', client);
                if(client){
                  this.authService.setClientId(client.id);
                  this.router.navigate(['/app-home', client.user.id]);
                  window.dispatchEvent(new Event('userLoggedIn'))
                }else{
                  alert('Error al registrar cliente');
                }
              },
              (error) => {
                console.error('Error al registrar cliente:', error);
              }
            );
          }else if (this.role == 'tecnico'){
              const technician: Technician ={
                id: 0,
                name: this.specialty,
                user: user
              }
              this.technicianService.register(technician).subscribe(
                (technician) => {
                  if(technician){
                    this.authService.setTechnicianId(technician.id);
                    this.router.navigate(['/app-home', technician.user.id]);
                  }
                }
              );

          }

        }
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }

}
