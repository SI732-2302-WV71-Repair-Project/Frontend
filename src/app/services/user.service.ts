import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService{

  private apiUrl = '/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  register(user: UserModel): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(userId: number, updatedUserData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, updatedUserData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  login(user: UserModel): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;  // Suponiendo que este es el endpoint para iniciar sesión
    return this.http.post(loginUrl, user );
  }
}
