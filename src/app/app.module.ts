import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDataComponent } from './doctor-data/doctor-data.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { DoctorDatasComponent } from './doctor-datas/doctor-datas.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDataComponent,
    RegFormComponent,
    LoadButtonComponent,
    DoctorDatasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
