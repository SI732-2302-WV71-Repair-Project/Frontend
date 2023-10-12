import { Component } from '@angular/core';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent {
  deviceBrand = '';
  deviceModel = '';
  deviceType = '';
  problemDescription = '';
  showConfirmation = false;

  addDevice(): void {
    if (this.deviceBrand && this.deviceModel && this.deviceType && this.problemDescription) {
      this.showConfirmation = true;
    }
  }

  confirmAdd(): void {
    // Aquí normalmente harías una llamada a un servicio para añadir el dispositivo
    console.log('Dispositivo añadido:', this.deviceBrand, this.deviceModel, this.deviceType, this.problemDescription);
    this.resetForm();
  }

  cancelAdd(): void {
    console.log('Añadir dispositivo cancelado');
    this.resetForm();
  }

  resetForm(): void {
    this.deviceBrand = '';
    this.deviceModel = '';
    this.deviceType = '';
    this.problemDescription = '';
    this.showConfirmation = false;
  }
}
