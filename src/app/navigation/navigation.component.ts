import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
 public isLogged: boolean = false;
 public isAdm: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    let isLogged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged") || "" ) : false;
    this.isLogged = isLogged == true;
    let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "" ) : null;
    if (user != null){
     this.isAdm = user.role == "Administrator" == true;
    }
  }
  
  onLogout(){
    localStorage.removeItem("isLogged");
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("/login");  
  }

}
