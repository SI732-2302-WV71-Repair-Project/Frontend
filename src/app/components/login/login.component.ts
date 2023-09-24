import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    ngOnInit(): void { }

    login(): void {
      this.clientService.login(this.email, this.password).subscribe(
        (response) => {
          if (response && response.success) {
            this.router.navigate(['/app-home']);
          } else {
            alert(response.message || 'Error en el inicio de sesión');
          }
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
        }
      )
    }
}
