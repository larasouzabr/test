import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.sass']
})
export class CreateProductsComponent implements OnInit {
  public type =["E-book", "Printed"]
  public book:Array<string> = [];
  public createProductsForm: FormGroup = new FormGroup({
    nameBook: new FormControl(null, Validators.required),
    authorBook: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") :[];
  }
  save(){
    this.book.push(this.createProductsForm.value);
    localStorage.setItem("book", JSON.stringify(this.book));
    this.createProductsForm.reset();
  }
}
