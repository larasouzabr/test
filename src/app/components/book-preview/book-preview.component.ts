import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/dtos';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    
    ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(this.book);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Book was bought');
    }, 1500);
  }

}
