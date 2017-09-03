import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:`<h1>Hello world</h1>
  // <h2>Hello...</h2>
  // `,
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //Taking the data from child component to parent component i.e. from person component to appcomponent.
  //i.e. interaction between the components.
  personData:any[]=[
    {id:1,name:'abc',job:'S/W Engineer'},
    {id:2,name:'pqr',job:'H/W Engineer'},
    {id:3,name:'xyz',job:'IAS'}
  ];
  toggleDiv(visible){
    console.log(visible);
  }
}
