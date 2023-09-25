import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId: number | null = null;

  setClientId(id: number): void {
    this.clientId = id;
  }

  getClientId(): number | null {
    return this.clientId;
  }
}
