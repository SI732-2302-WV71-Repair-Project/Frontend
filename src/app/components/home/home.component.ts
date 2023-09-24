import { Component } from '@angular/core'
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

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    const clientId = 1
    console.log(clientId)
      this.clientSubscription = this.clientService.getClientById(clientId).subscribe(
      (data) => {
        this.client = data
        console.log(this.client)
      },
      (error) => {
        console.error('Error al obtener datos del cliente:', error)
      }
    )
  }
}