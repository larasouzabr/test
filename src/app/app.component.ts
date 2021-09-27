import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title: any;
  
  constructor(
    private router: Router
  ){}
 
  ngOnInit(): void {
    let isLogged = localStorage.getItem("isLogged") ?  JSON.parse(localStorage.getItem("isLogged") || "") : false;
    isLogged ? this.router.navigateByUrl("home") : this.router.navigateByUrl("login");      
  }
 


  }


