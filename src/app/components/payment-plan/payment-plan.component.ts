import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {
  paymentForm: FormGroup;
  isLoading: boolean = false;
  paymentSuccess: boolean = false;
  dialogRef?: MatDialogRef<any>;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.paymentForm = fb.group({
      paymentType: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
    
  }

  ngOnInit(): void {
    this.dialogRef = this.dialogRef as MatDialogRef<any>;
  }

  submitPayment() {
    this.isLoading = true; // Muestra el spinner
    setTimeout(() => {
      // Simula un pago exitoso aquí
      this.isLoading = false; // Oculta el spinner
      this.paymentSuccess = true; // Muestra el mensaje de éxito
      
    }, 2000); // Simulamos un retraso de 2 segundos
  }

  closeDialog() {
    console.log(this.dialogRef);
    
    if (this.dialogRef) {
      this.dialogRef.close('success');
    }
  }
}
