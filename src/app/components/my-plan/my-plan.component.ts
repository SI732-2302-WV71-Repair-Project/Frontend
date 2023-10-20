import { Component } from '@angular/core';

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.css']
})
export class MyPlanComponent {
  plan: string = '0'; // Cambia '0' a '1' si el usuario es premium

  cambiarPlan() {
    // Agrega aquí la lógica para cambiar el plan a Premium
    // Esto puede incluir redireccionar a una página de pago o realizar otras acciones necesarias
    // Por ejemplo, podrías mostrar un mensaje de éxito después del cambio
    alert('¡Has cambiado a Premium con éxito!');
    this.plan = '1'; // Cambia el plan a Premium
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
}

