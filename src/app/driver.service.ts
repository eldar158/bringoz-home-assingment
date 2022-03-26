import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;

import { environment } from 'src/environments/environment'

import { Driver } from './models/Driver.model';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(environment.BACKEND_URL + '/drivers')
  }

  postDriver(driver:Driver): Observable<Driver> {
    return this.http.post<Driver>(environment.BACKEND_URL + '/drivers', driver)
  }

  putDriver(driver:Driver) {
    return this.http.post<Driver>(environment.BACKEND_URL + '/drivers', driver)
    //todo how to tell him which one? using name probably. look at json-server docs
  }

  deleteDriver(id:number){
    return this.http.delete<Driver[]>(environment.BACKEND_URL + '/drivers') //todo find how to choose id
  }
}
