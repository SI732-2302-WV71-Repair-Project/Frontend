import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent {
  device: Device = {
    id: 0,
    brand: '',
    model: '',
    model_image: '',
    client: {
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
    },
    type: '',
    problem: ''
  };

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const deviceId = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.getDeviceById(deviceId).subscribe(data => {
      this.device = data;
    });
  }

  onSubmit(): void {
    const deviceId = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.updateDevice(deviceId, this.device).subscribe(() => {
      alert('Dispositivo actualizado exitosamente');
      this.router.navigate(['/ruta-a-donde-quiera-redirigir-despues']);
    });
  }

  onDelete(): void {
    const deviceId = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.deleteDevice(deviceId).subscribe(() => {
      alert('Dispositivo eliminado exitosamente');
      this.router.navigate(['/ruta-a-donde-quiera-redirigir-despues']);
    });
  }
}
