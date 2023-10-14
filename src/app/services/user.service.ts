import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  public addUser(newUser: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, newUser);
  }

//   public saveUser(object: object) {: Observable<any[]> {
//     return this.http.set<any[]>(this.apiUrl);
//   }
//   public removeUser(key: string) {
//     localStorage.removeItem(key);
//   }
//   public clearUser() {
//     localStorage.clear();
//   }
}