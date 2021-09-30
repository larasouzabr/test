import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    public router : Router,
    public user: User,
  ){}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     /* if (this.user != null){
      this.user = JSON.parse(sessionStorage.getItem("user") || "");
      route.routeConfig?.data?.role.find((e:any) => e == this.user.role) == undefined){
        this.router.navigate([this.user.home])
     }
    
      });   */
    return true;
  }
  
}
