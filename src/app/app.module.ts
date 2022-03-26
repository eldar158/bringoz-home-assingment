import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { DriverMapComponent } from './driver-map/driver-map.component';
import { AddDriverButtonComponent } from './post-driver-button/post-driver-button.component';
import { DeleteResponseInterceptor } from './driver-table/delete-response.interceptor'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: DeleteResponseInterceptor, multi: true}],
  declarations: [
    AppComponent,
    DriverTableComponent,
    DriverMapComponent,
    AddDriverButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
