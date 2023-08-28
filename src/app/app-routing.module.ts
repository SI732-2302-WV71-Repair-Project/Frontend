import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyAppliancesComponent } from './components/my-appliances/my-appliances.component';
import { MyPlanComponent } from './components/my-plan/my-plan.component';
import { MyRouteComponent } from './components/my-route/my-route.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [


  {path: 'app-home', component:HomeComponent },
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },

  { path: 'app-navbar', component: NavbarComponent },
  { path: 'app-my-appliances', component: MyAppliancesComponent },
  { path: 'app-my-plan', component: MyPlanComponent },
  { path: 'app-my-route', component: MyRouteComponent },
  { path: 'app-notifications', component: NotificationsComponent },
  { path: 'app-profile', component: ProfileComponent },
  { path: 'app-reports', component: ReportsComponent },
  
  {path: 'app-footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
