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
import { NewDeviceComponent } from './components/new-device/new-device.component';
import { EditDeviceComponent } from './components/edit-device/edit-device.component';
import { ChatClientTechnicianComponent } from './components/chat-client-technician/chat-client-technician.component';
import { PaymentEquipmentRepairComponent, SuccessDialogComponent } from './components/payment-equipment-repair/payment-equipment-repair.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { TechnicianDialogComponent } from './components/technician-dialog/technician-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DownloadReportDialogComponent } from './components/download-report-dialog/download-report-dialog.component';


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
    RegisterComponent,
    NewDeviceComponent,
    EditDeviceComponent,
    ChatClientTechnicianComponent,
    PaymentEquipmentRepairComponent,
    SuccessDialogComponent,
    TechnicianDialogComponent,
    DownloadReportDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
