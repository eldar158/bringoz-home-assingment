import { Component, OnInit } from '@angular/core';

import { Driver } from './models/Driver.model'
import { Observable } from 'rxjs';

import { DriverService } from './driver.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  drivers!: Observable<Driver[]>

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.drivers = this.driverService.getDrivers()
  }
}
