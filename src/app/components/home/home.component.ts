import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service"; // Importa el servicio de autenticación

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  client!: Client;

  user!: UserModel;
  private clientSubscription!: Subscription;

  constructor(
    private userService: UserService,
    private clientService: ClientService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    const technicianId = this.authService.getTechnicianId();
    const clientId = this.authService.getClientId();


    if (userId) {
      this.clientSubscription = this.userService.getUserById(userId).subscribe(
        (data) => {
          this.user = data;
          console.log(this.user);
        },
        (error) => {
          console.error('Error al obtener datos del cliente:', error);
        }
      );
    } else {
      console.error('No se proporcionó un ID válido.');
    }


  }
}
