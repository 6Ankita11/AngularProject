import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data:any;
  localStorage:any;
  constructor(private router:Router){}

  
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    console.log(localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn') == "true"){
      
      return true;
    }
    this.router.navigate(['/login'], { queryParams :{ returnUrl:state.url}})
    return false
  }
  
}
