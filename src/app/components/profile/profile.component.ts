import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Subscription  } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client!: Client;
  private clientSubscription!: Subscription;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    // Supongamos que el ID del cliente que deseas obtener es 2
    const clientId = 3;
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
  }
}
