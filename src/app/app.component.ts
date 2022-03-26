import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Driver } from './models/Driver.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly ROOT_URL= 'http://localhost:3000'

  drivers!: Observable<Driver[]>
  lat!:number
  lng!:number
  zoom = 8


  constructor(private http: HttpClient) {}

  getDrivers() {
    this.drivers = this.http.get<Driver[]>(this.ROOT_URL + '/drivers')
    this.drivers.subscribe((drivers) => {
      this.lat = drivers[0].location.lat
      this.lng = drivers[0].location.lng
    })
  }

  ngOnInit(): void {
      this.getDrivers()
  }
}
