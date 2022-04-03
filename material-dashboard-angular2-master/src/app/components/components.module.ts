import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddcustomerComponent } from './Admin/addcustomer/addcustomer.component';
import { AddwasherComponent } from './Admin/addwasher/addwasher.component';
import { AddappoinmentComponent } from './Customer/addappoinment/addappoinment.component';
import { AddserviceComponent } from './Admin/addservice/addservice.component';
import { ServiceListComponent } from './Admin/service-list/service-list.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user/user.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AddcustomerComponent,
    AddwasherComponent,
    AddappoinmentComponent,
    AddserviceComponent,
    ServiceListComponent,
    LoginComponent,
    UserComponent,
  
   
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
