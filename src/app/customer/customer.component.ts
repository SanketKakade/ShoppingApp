import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name:string ="Test";
  toggleText:string="ToggleText"
  isVisible:boolean =false;
  constructor() { }
  custList:any[]=[
    {id:1,name:'abc',address:'Mumbai'},
    {id:2,name:'pqr',address:'Pune'},
    {id:3,name:'xyz',address:'Chennai'}
  ];
  ngOnInit() {
  }
  
  toggle(){
    this.isVisible = !this.isVisible;
  }

}
