import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentPlanComponent } from '../payment-plan/payment-plan.component';
@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.css']
})
export class MyPlanComponent {

  constructor(private dialog: MatDialog) {}

  plan: string = '0'; // Cambia '0' a '1' si el usuario es premium

  cambiarPlan() {
    const dialogRef = this.dialog.open(PaymentPlanComponent);
    
    dialogRef.componentInstance.dialogRef = dialogRef; // Configura la referencia al MatDialogRef

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica después de que se cierra el diálogo
      console.log("hola")
      if (result === 'success') {
      
        this.plan = '1'; // Cambia el plan a Premium
      }
    });
  }
  

  cancelarSuscripcion() {
    // Agrega aquí la lógica para cancelar la suscripción al plan Premium
    // Esto puede incluir un proceso de confirmación y la actualización del plan a '0' si se cancela
    // Por ejemplo, podrías mostrar un mensaje de confirmación y luego actualizar el plan
    const confirmar = confirm('¿Estás seguro de que deseas cancelar tu suscripción Premium?');
    if (confirmar) {
      alert('¡Has cancelado tu suscripción Premium!');
      this.plan = '0'; // Cambia el plan a Gratis
    }
  }
  getFreeIconClass(isFree: boolean): string {
    return this.plan === '0' && isFree ? 'text-primary' : '';
  }
  getPremiumIconClass(isPremium: boolean): string {
    return this.plan === '1' && isPremium ? 'text-primary' : '';
  }
}

