import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

@NgModule({
  //components, directives and pipes should be part of declarations.
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    PersonComponent,
    ProductComponent,
    ProductListComponent
  ],
  //importing modules here
  imports: [
    BrowserModule
  ],
  //providers array: use to register a service
  providers: [],
  bootstrap: [AppComponent] //bootstrap will contain our root component.
})
export class AppModule { }
