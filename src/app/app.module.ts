import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyAppliancesComponent } from './components/my-appliances/my-appliances.component';
import { MyPlanComponent } from './components/my-plan/my-plan.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MyRouteComponent } from './components/my-route/my-route.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyAppliancesComponent,
    MyPlanComponent,
    NotificationsComponent,
    ReportsComponent,
    MyRouteComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
