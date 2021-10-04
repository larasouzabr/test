import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

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
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  save(){
    let users:Array<any> = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") :[];
    if (users.findIndex(u=> u.username == this.loginForm.value.username && u.password == this.loginForm.value.password) != -1) {
      localStorage.setItem("isLogged",JSON.stringify(true));
      sessionStorage.setItem("user",JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('home')
    }else{
      this.toastr.error('Invalid Username or Password');
    }
  }
}
