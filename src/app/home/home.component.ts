import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';
import { Comment } from '../dtos/index';
import { Book } from '../dtos/index';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public user: any;
  public users: Array<any>=[];
  public book: Array<Book>=[] ;
  public comments: Array<Comment> = [];

  constructor(
    private JSONPlaceholder: JSONPlaceholderService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { 
    this.comments = new Array <any> () 
    }
  
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || "");
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : [];
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") : [];
    this.spinner.show();
    this.JSONPlaceholder.getData().subscribe((resp)=>{
      this.comments = resp;
      console.log(this.comments);
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }
  );
}
  onClick(book:any){
    console.log(book);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Book was bought');
    }, 1500);
  }
}
