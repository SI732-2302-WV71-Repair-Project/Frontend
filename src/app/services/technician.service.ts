import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private apiUrl = '/api/technician';

  constructor(private http: HttpClient) { }

  getTechnician(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTechnicianById(technicianId: number): Observable<any> {
    const url = `${this.apiUrl}/${technicianId}`;
    return this.http.get(url);
  }

  updateTechnician(technicianId: number, updatedTechnicianData: any): Observable<any> {
    const url = `${this.apiUrl}/${technicianId}`;
    console.log(url);
    console.log(updatedTechnicianData);
    return this.http.put(url, updatedTechnicianData);
  }

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;  // Suponiendo que este es el endpoint para iniciar sesión
    return this.http.post(loginUrl, { email, password });
  }

  register (client: Client): Observable<any> {
    return this.http.post(this.apiUrl, client);
  }

}
