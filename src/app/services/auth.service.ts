import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId: number | null = null;

  private clientId: number | null = null;

  private technicianId: number | null = null;

  private role: string | null = null;

  constructor() { }

  setRole(role: string): void {
    this.role = role;
  }

  getRole(): string | null {
    return this.role;
  }

  setTechnicianId(id: number): void {
    this.technicianId = id;
  }

  getTechnicianId(): number | null {
    return this.technicianId;
  }

  setUserId(id: number): void {
    this.userId = id;
  }

  getUserId(): number | null {
    return this.userId;
  }

  setClientId(id: number): void {
    this.clientId = id;
  }

  getClientId(): number | null {
    return this.clientId;
  }
}
