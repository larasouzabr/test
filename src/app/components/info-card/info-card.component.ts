import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Comment } from 'src/app/dtos';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.sass']
})
export class InfoCardComponent implements OnInit {
  
  @Input()
  public comment: Comment | null = null;

  @Output()
  public clickEvent: EventEmitter <any> = new EventEmitter<any> ();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(this.comment);
  }

}
