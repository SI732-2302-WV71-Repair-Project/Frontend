import { Component, OnInit } from '@angular/core';

interface ChatMessage {
    sender: 'client' | 'technician';
    content: string;
    date: Date;
}

@Component({
  selector: 'app-chat-client-technician',
  templateUrl: './chat-client-technician.component.html',
  styleUrls: ['./chat-client-technician.component.css']
})

export class ChatClientTechnicianComponent implements OnInit {
  chatMessages: ChatMessage[] = [];
  newMessage = '';
  notificationMessage: string | null = 'Solicitud apertura chat aceptada'; // Aquí sólo como ejemplo, en realidad se debería manejar según los escenarios.

  constructor() { }

  ngOnInit(): void {
    // inicializar y cargar mensajes previos si es necesario.
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatMessages.push({
        sender: 'client',
        content: this.newMessage,
        date: new Date()
      });
      this.newMessage = '';
      // agregar lógica para enviar el mensaje al servidor o al técnico
    }
  }

  openChat(): void {
    // Lógica para abrir el chat (por ejemplo, cargando mensajes previos, etc.)
    this.notificationMessage = null;  // Oculta la notificación
  }
}
