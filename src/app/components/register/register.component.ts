import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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

  passwordConfirm: string = '';

  constructor(
    private clientService:ClientService,
    private authService:AuthService,
    private router: Router
  ) { }

  register(): void {
    this.clientService.register(this.client).subscribe(
      (data) => {
        console.log(data);
        if(data && data.id){
          this.authService.setClientId(data.id);
          this.router.navigate(['/app-home', data.id])
        }
        else{
          alert('Error al registrar usuario')
        }
      },
      (error) => {
        console.error('Error al registrar usuario:', error)
      }
    )
  }

}
