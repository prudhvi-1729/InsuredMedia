import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as usersData from '../../assets/users.json';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userLoggedIn=new BehaviorSubject<boolean>(false);
  public isLoggedIn: Observable<boolean> = this.userLoggedIn.asObservable(); // Duplicate identifier 'isLoggedIn'.

  set _isLoggedIn(val:boolean){
    this.userLoggedIn.next(val);
  }

  get _isLoggedIn():Observable<boolean>{
    return this.userLoggedIn.asObservable();
  }

  public getUsers():any{
    return of(usersData);
  }
}
