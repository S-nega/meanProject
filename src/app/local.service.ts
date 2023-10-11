import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }

}
