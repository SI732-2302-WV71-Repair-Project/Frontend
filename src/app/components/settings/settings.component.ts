import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  client: Client = {
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
  };

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.obtenerClienteActual();
  }

  obtenerClienteActual() {
    const clientId = 1; // Reemplaza con el ID del cliente que deseas obtener
    this.clientService.getClientById(clientId).subscribe(
      (data) => {
        this.client = { ...data }; // Copia los datos del cliente obtenido
      },
      (error) => {
        console.error('Error al obtener datos del cliente:', error);
      }
    );
  }

  guardarDatos() {
    console.log(this.client)
    this.clientService.updateClient(this.client.id, this.client).subscribe(
      {next: (res: any) => {
        this.client = res
        console.log('Cliente actualizado con éxito', res);
      },
      error: (err: any)=>console.log(err)}
    );
  }
}
