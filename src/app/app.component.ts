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

  onPostEvent($event:Driver) {
    this.drivers.push($event)
  }

  onDeleteEvent($event:Driver) {
  //   const deletedDriverId = $event
  //   this.drivers = this.drivers.filter((driver) => {
  //     driver.id != deletedDriverId
  //   })
  this.ngOnInit()
  }
}
