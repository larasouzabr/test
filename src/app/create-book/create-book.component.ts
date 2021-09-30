import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.sass']
})
export class CreateBookComponent implements OnInit {
  public type =["E-book", "Printed"]
  public book:Array<string> = [];
  
  public createBookForm: FormGroup = new FormGroup({
    nameBook: new FormControl(null, Validators.required),
    authorBook: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") :[];
  }
  save(){
    this.book.push(this.createBookForm.value);
    localStorage.setItem("book", JSON.stringify(this.book));
    this.createBookForm.reset();
  }
}
