import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() personList:any[];
  @Input() title:string;
  //transfer event from child component to parent component
  hidden:boolean =false;
  @Output() isVisibleEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  hideDiv(){
    this.hidden = !this.hidden;
    this.isVisibleEvent.emit(this.hidden);
  }
}
