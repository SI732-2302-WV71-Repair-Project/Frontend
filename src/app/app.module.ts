import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyAppliancesComponent } from './components/my-appliances/my-appliances.component';
import { MyPlanComponent } from './components/my-plan/my-plan.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyTechniciansComponent } from './components/my-technicians/my-technicians.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyAppliancesComponent,
    MyPlanComponent,
    NotificationsComponent,
    ReportsComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    MyTechniciansComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
