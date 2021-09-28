import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
 constructor( 
  private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   /*  if(route.routeConfig.data.role.find(r => r == this.user.role) == undefined){
     this.router.navigate(["/create-book"]);
    } */
      return true;
  }
  
}
