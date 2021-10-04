import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { Book } from '../dtos';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.sass']
})
export class CreateBookComponent implements OnInit {
  public type =["E-book", "Printed"]
  public book:Array<Book> = [];
  
  public createBookForm: FormGroup = new FormGroup({
    nameBook: new FormControl(null, Validators.required),
    authorBook: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required)
  });
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    
  ) { }

  ngOnInit(): void {
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") :[];

     this.spinner.show();
     setTimeout(() => {
       this.spinner.hide();
     }, 1000);
  }
  save(){
    this.book.push(this.createBookForm.value);
    localStorage.setItem("book", JSON.stringify(this.book));
    this.createBookForm.reset();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Book created!');
    }, 1500);
    
  }

  /* delete(){
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") :[];
    localStorage.removeItem("book");
    localStorage.setItem("book", JSON.stringify(this.book));
    }  
    */
  }

