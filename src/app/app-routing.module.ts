import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyAppliancesComponent } from './components/my-appliances/my-appliances.component';
import { MyPlanComponent } from './components/my-plan/my-plan.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyTechniciansComponent } from './components/my-technicians/my-technicians.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewDeviceComponent } from './components/new-device/new-device.component';
import { EditDeviceComponent } from './components/edit-device/edit-device.component';

const routes: Routes = [


  {path: 'app-login', component:LoginComponent},
  {path: 'app-register', component:RegisterComponent},

  //para el login
  { path: 'app-home/:id', component: HomeComponent },
  
  { path: '', redirectTo: '/app-login', pathMatch: 'full' },
  {path: 'app-home', component:HomeComponent },
  { path: 'app-navbar', component: NavbarComponent },
  { path: 'app-my-appliances', component: MyAppliancesComponent },
  { path: 'app-my-plan', component: MyPlanComponent },
  { path: 'app-notifications', component: NotificationsComponent },
  { path: 'app-profile', component: ProfileComponent },
  { path: 'app-reports', component: ReportsComponent },
  {path:'app-my-technicians', component:MyTechniciansComponent},
  { path: 'app-settings', component:SettingsComponent},
  {path:'app-new-device', component:NewDeviceComponent},
  {path: 'app-edit-device', component: EditDeviceComponent},
  
  {path: 'app-footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
