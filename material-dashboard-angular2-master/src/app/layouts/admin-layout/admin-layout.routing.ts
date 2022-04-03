import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../components/Admin/customer-list/customer-list.component';
import { WasherListComponent } from '../../components/Admin/washer-list/washer-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddcustomerComponent } from 'app/components/Admin/addcustomer/addcustomer.component';
import { AddwasherComponent } from 'app/components/Admin/addwasher/addwasher.component';
import { AppoinmentListComponent } from 'app/components/Admin/appoinment-list/appoinment-list.component';
import { CalendarComponent } from 'app/components/Admin/calendar/calendar.component';
import { notificationsComponent } from 'app/notifications/notifications.component';
import { AddserviceComponent } from 'app/components/Admin/Addservice/Addservice.component';
import { ServiceListComponent } from 'app/components/Admin/service-list/service-list.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { LoginComponent } from 'app/components/auth/login/login.component';
import { UserComponent } from 'app/components/user/user/user.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'addcustomer',    component: AddcustomerComponent },
    { path: 'addwasher',    component: AddwasherComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'customer-list',     component: TableListComponent },
    { path: 'Calendar',     component: CalendarComponent },
    { path: 'washer-list',          component: WasherListComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: notificationsComponent },
    { path: 'Appointment',        component: AppoinmentListComponent },
    { path: 'service-list',        component: ServiceListComponent },
    { path: 'addservice',        component: AddserviceComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'user',        component: UserComponent },
   
];
