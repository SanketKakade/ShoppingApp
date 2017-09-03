import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { Productinfo } from './Productinfo';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string;
  product_title:string= "This is 2nd product list";
  productData:product[]=[
    {id :1, product_name:'abc',price:100,qty:2},
    {id :2, product_name:'pqr',price:200,qty:3},
    {id :3, product_name:'xyz',price:300,qty:4}
  ];
  productInfo:Productinfo[]=[
    {id :1, product_color:'red'},
    {id :2, product_color:'blue'},
  ]
  isVisible:boolean =true; 
  constructor() { }

  ngOnInit() {
    this.title = "This is the PRODUCT title";
  }
  updateTitle() {
    this.title = "This is the updated PRODUCT title";
  }

}
