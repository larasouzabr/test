import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/dtos';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.sass']
})
export class BookPreviewComponent implements OnInit {
  
  @Input()
  public book : Book | null = null;

  @Output()
  public clickEvent: EventEmitter <any> = new EventEmitter<any> ();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(this.book);
  }

}
