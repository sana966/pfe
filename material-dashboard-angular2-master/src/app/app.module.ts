import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './components/Admin/customer-list/customer-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { notificationsComponent } from 'app/notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WasherListComponent } from './components/Admin/washer-list/washer-list.component';
import { AppoinmentListComponent } from './components/Admin/appoinment-list/appoinment-list.component';
import { CalendarComponent } from './components/Admin/calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user/user.component';



//import { LoginComponent} from './components/auth/login/login.component';
@NgModule({
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WasherListComponent,
    AppoinmentListComponent,
    CalendarComponent,
    UserComponent
    
    
       //LoginComponent,
  

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
