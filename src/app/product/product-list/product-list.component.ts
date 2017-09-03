import { Component, OnInit, Input } from '@angular/core';
import {product} from '../Product';
import {Productinfo} from '../Productinfo';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string;
  num:number =1;
  //Input() is used to pass the data between components.
  @Input() productList:product[];
  @Input() productList1:Productinfo[];
  @Input() product_title:string;
  
  constructor() { }

  ngOnInit() {
    this.title="This is title string";
  }
  updateTitle() {
    this.title = "This is the updated PRODUCT list";
  }
  incrementNumber(){
    
    this.num++;
  }
  decrementNumber(){
    this.num--;
    if(this.num < 1){
      this.num=1;
    }
  }
}
