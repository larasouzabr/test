import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public user: any;
  public users: Array<any>=[]
  public book:Array<any>=[]
  constructor() { }
  
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || "");
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : [];
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") : [];
  }

  test(i:any){
    console.log(this.book[i]);
  }
}
