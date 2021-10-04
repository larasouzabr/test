import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public roles = ["Administrator", "User"];
  public users:Array<any> = [];

  public registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required),
    role:new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
  ) {}

  ngOnInit(): void {
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") :[];
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  
  save(){
    this.users.push(this.registerForm.value);
    localStorage.setItem("users", JSON.stringify(this.users));
    this.registerForm.reset();
    this.toastr.success('User created!');
    this.router.navigateByUrl("/login");
  }
}
