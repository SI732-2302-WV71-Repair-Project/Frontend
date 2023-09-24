import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getClientById(clientId: number): Observable<any> {
    const url = `${this.apiUrl}/${clientId}`;
    return this.http.get(url);
  }

  updateClient(clientId: number, updatedClientData: any): Observable<any> {
    const url = `${this.apiUrl}/${clientId}`;
    console.log(url);
    console.log(updatedClientData);
    return this.http.put(url, updatedClientData);
  }

  login (email: string, password: string): Observable<any> {
  
    return this.http.post(this.apiUrl, { email, password });
  }


  register (client: Client): Observable<any> {
    return this.http.post(this.apiUrl, client);
  }

}
