import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
 public isLogged: boolean = false;
 public isAdm: boolean = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    let isLogged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged") || "" ) : false;
    this.isLogged = isLogged == true;
    let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "" ) : null;
    if (user != null){
      user.role == "Administrator" == this.isAdm;
    }
  }
  
  onLogout(){
    localStorage.removeItem("isLogged");
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("/login"); 
    this.toastr.success('User logout');
  }

}
