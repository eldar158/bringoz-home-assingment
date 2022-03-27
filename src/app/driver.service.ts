import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { Observable } from 'rxjs';

import { Driver } from './models/Driver.model';

const BACKEND_URL = 'http://localhost:3000'


@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getDrivers():Observable<Driver[]> {
    return this.http.get<Driver[]>(BACKEND_URL + '/drivers')
  }

  postDriver(driver:Driver):Observable<Driver> {
    return this.http.post<Driver>(BACKEND_URL + '/drivers', driver)
  }

  putDriver(driver:Driver):Observable<Driver> {
    return this.http.post<Driver>(BACKEND_URL + '/drivers', driver)
  }

  deleteDriver(id:number):Observable<Driver> {
    return this.http.delete<Driver>(BACKEND_URL + '/drivers/' + id)
  }
}
