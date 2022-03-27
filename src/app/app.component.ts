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
  drivers:Driver[] = []

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.driverService.getDrivers()
      .subscribe((drivers:Driver[]) => {
        this.drivers = drivers
      })
  }

  onPostEvent(newDriver:Driver) {
    this.drivers.push(newDriver)
  }

  onPutEvent(editedDriver:Driver) {
    this.drivers = this.drivers.map((driver) => {
      if (driver.id === editedDriver.id) return editedDriver
      return driver
    })
  }

  onDeleteEvent(deletedDriverId:number) {
    this.drivers = this.drivers.filter(driver =>driver.id != deletedDriverId)
  }
}
