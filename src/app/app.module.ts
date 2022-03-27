import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { DriverMapComponent } from './driver-map/driver-map.component';
import { AddDriverButtonComponent } from './post-driver-button/post-driver-button.component';

import { MaterialModule } from './material.module';
import { DriverDialogComponent } from './driver-dialog/driver-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    DriverTableComponent,
    DriverMapComponent,
    AddDriverButtonComponent,
    DriverDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
