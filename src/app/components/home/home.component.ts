import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  client!: Client;
  private clientSubscription!: Subscription;

  constructor(
    private clientService: ClientService,
    private authService: AuthService, // Inyecta el servicio de autenticación
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener el ID desde el servicio de autenticación
    const clientId = this.authService.getClientId();

    if (clientId) {
      console.log(clientId);
      this.clientSubscription = this.clientService.getClientById(clientId).subscribe(
        (data) => {
          this.client = data;
          console.log(this.client);
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
