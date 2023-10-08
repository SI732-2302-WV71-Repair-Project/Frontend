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

  requestRepair(): void {
    if (this.problemDescription) {
      this.showConfirmation = true;
    }
  }

  confirmRepair(): void {
    // confirmar la reparación
    console.log('Reparación solicitada:', this.problemDescription);
    this.resetForm();
  }

  cancelRepair(): void {
    // cancelar la reparación
    console.log('Reparación cancelada');
    this.resetForm();
  }

  resetForm(): void {
    this.problemDescription = '';
    this.showConfirmation = false;
  }
}
