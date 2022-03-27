import { Component, Output, EventEmitter, Input } from '@angular/core';

import { DriverService } from '../driver.service';
import { Driver } from '../models/Driver.model';


@Component({
  selector: 'app-post-driver-button',
  templateUrl: './post-driver-button.component.html',
  styleUrls: ['./post-driver-button.component.css']
})
export class AddDriverButtonComponent {

  constructor(private driverService:DriverService) { }

  @Input() drivers:Driver[] = []
  @Output() postEvent = new EventEmitter<Driver>()

  onPostDriver() {
    const high:number = highestId(this.drivers)

    const tmpDriver:Driver = {
      id: high + 1, //each new driver get id bigger than the biggest id on the list so it would be uniqe
      name: 'newDriver',
      email: 'driver@emailProvider.com',
      phone: '0-123-456-7890',
      location: {lat: 0, lng: 0},
      tasks: []
    }

    this.driverService
      .postDriver(tmpDriver)
      .subscribe((driver:Driver) => {
        this.postEvent.emit(driver)
      })
  }
}

function highestId(drivers:Driver[]):number {
  var high:number = 0
  for (let i = 0; i < drivers.length; i++) {
    high = Math.max(high, drivers[i].id)
  }
  return high
}
