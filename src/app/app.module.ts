import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    JobseekerprofileComponent,
    EmployeedashboardComponent
   
  ],
  imports: [
    BrowserModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
