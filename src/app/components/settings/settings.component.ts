import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  client: Client = {
    id: 0,
    user: {
      id: 0,
      firstName: '',
      lastName: '',
      cellphoneNumber: '',
      email: '',
      password: '',
      birthDate: null,
      gender: '',
      lastConnection: null,
      address: '',
      district: ''
    },
    plan: ''
  };

  constructor(
    private clientService: ClientService,
    private authService: AuthService // Inyecta el servicio de autenticación
  ) { }

  ngOnInit(): void {
    // Obtener el ID del cliente actual desde el servicio de autenticación
    const clientId = this.authService.getClientId();

    if (clientId !== null) {
      // Utiliza el ID del cliente para obtener sus datos
      this.obtenerClienteActual(clientId);
    } else {
      // Manejar el caso cuando clientId es null, por ejemplo, redirigir a una página de error o hacer algo adecuado.
    }
  }

  obtenerClienteActual(clientId: number) {
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
      error: (err: any) => console.log(err)}
    );
  }
}
