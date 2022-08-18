import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegFormComponent } from './components/reg-form/reg-form.component';
import { LoadButtonComponent } from './components/load-button/load-button.component';
import { DoctorDatasComponent } from './components/doctor-datas/doctor-datas.component';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,

    RegFormComponent,
    LoadButtonComponent,
    DoctorDatasComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
