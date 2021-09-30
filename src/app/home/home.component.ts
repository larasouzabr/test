import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public user: any;
  public users: Array<any>=[]
  public book:Array<any>=[] 
   data: Array<any>
  constructor(
    private JSONPlaceholder: JSONPlaceholderService,
  ) { 
    this.data = new Array <any> ()
    }
  
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || "");
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : [];
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") : [];
    this.JSONPlaceholder.getData().subscribe((data)=>{
      console.log(data)
      this.data = data
  });
}

  test(i:any){
    console.log(this.book[i]);
  }

  /* getDataFromAPI(){
  this.JSONPlaceholder.getData().subscribe((data)=>{
    console.log(data)
    this.data = data
  }) 
  } */

}
