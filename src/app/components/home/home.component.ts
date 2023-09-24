import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { Client } from 'src/app/models/client.model'
import { ClientService } from 'src/app/services/client.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  client!: Client
  private clientSubscription!: Subscription

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el ID desde la URL
    const clientIdString = this.route.snapshot.paramMap.get('id');

    // Asegurar que clientIdString no sea nulo y convertirlo a un número
    const clientId = clientIdString ? +clientIdString : null;

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