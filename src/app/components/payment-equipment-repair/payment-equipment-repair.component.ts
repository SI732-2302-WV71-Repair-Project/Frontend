import {Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-payment-equipment-repair',
  templateUrl: './payment-equipment-repair.component.html',
  styleUrls: ['./payment-equipment-repair.component.css']
})
export class PaymentEquipmentRepairComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.paymentForm = this.fb.group({
      amount: [null, Validators.required],
      serviceType: [null, Validators.required],
      paymentMethod: [null, Validators.required]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: 'Pago realizado con éxito'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Cuadro de diálogo cerrado');
    });
  }

  onSubmit() {
    // Lógica de pago aquí
    this.openDialog();
  }
}

@Component({
      selector: 'app-success-dialog',
      template:`
          <h2>Pago Realizado</h2>
    <p>{{ data }}</p>
<button mat-button (click)="closeDialog()">Cerrar</button>`
    ,
})
export class SuccessDialogComponent {
  constructor(
      public dialogRef: MatDialogRef<SuccessDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
