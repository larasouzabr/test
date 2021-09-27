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
    let isAdm = localStorage.getItem("isAdm") ? JSON.parse(localStorage.getItem("isAdm") || "" ) : false;
    this.isAdm = isAdm == true;
  }
  
  onLogout(){
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isAdm");
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("/login");  
  }

}
