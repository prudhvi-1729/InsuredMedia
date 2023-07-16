import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  isUserLoggedIn=false;
  constructor(private Auth:AuthserviceService, private router:Router) { 
    this.Auth._isLoggedIn.subscribe(data=>{
      this.isUserLoggedIn=data
    })
  }
  canActivate(): boolean {
      if(!this.isUserLoggedIn){
        alert('please login to access gallery');
        this.router.navigate(['']);
        return false
      }
      return true
    }

}
