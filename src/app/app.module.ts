import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { DriverMapComponent } from './driver-map/driver-map.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    })
  ],
  providers: [],
  declarations: [
    AppComponent,
    DriverTableComponent,
    DriverMapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
