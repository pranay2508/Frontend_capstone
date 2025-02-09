import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent
   
  ],
  imports: [
    BrowserModule, RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
