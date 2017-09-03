import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  empList:any[]=[
    {id:1,name:'abc',salary:2000,address:'Pune'},
    {id:2,name:'pqr',salary:3000,address:'Pune'},
    {id:3,name:'xyz',salary:4000,address:'Pune'}
  ];

}
