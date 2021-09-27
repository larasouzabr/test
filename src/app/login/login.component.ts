import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}
  
  save(){
    let users:Array<any> = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") :[];
    if (users.findIndex(u=> u.username == this.loginForm.value.username && u.password == this.loginForm.value.password) != -1) {
      localStorage.setItem("isLogged",JSON.stringify(true));
      sessionStorage.setItem("user",JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('home')
/* 
      if (users.findIndex(u=> u.role == this.loginForm.value == "Administrator"){
        localStorage.setItem("isAdm",JSON.stringify(true));
        sessionStorage.setItem("Adm",JSON.stringify(this.loginForm.value));
        }    */
    }  
  }
}
