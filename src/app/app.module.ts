import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { TodayComponent } from './today/today.component';
import { NextdaysComponent } from './nextdays/nextdays.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    TodayComponent,
    NextdaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
