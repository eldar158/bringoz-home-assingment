import { Component, OnInit } from '@angular/core';

import { Driver } from './models/Driver.model'
import { DriverService } from './driver.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  drivers:Driver[] = []
  selectedDriverId:number = 0 // first driver is selected (0). -1 means no driver selected

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.driverService.getDrivers()
      .subscribe((drivers:Driver[]) => {
        this.drivers = drivers
      })
  }

  onSelectEvent(selectedDriverId:number) {
    this.selectedDriverId = selectedDriverId
  }

  onPostEvent(newDriver:Driver) {
    const newDrivers = JSON.parse(JSON.stringify(this.drivers))
    newDrivers.push(newDriver)
    this.drivers = newDrivers
  }

  onPutEvent(editedDriver:Driver) {
    this.drivers = this.drivers.map((driver) => {
      if (driver.id === editedDriver.id) return editedDriver
      return driver
    })
  }

  onDeleteEvent(deletedDriverId:number) {
    this.drivers = this.drivers.filter(driver =>driver.id != deletedDriverId)
    if (deletedDriverId === this.selectedDriverId) {
      this.selectedDriverId = -1  // removes from selection
    }
  }
}
