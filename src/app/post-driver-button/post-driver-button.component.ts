import { Component, Output, EventEmitter } from '@angular/core';

import { DriverService } from '../driver.service';
import { Driver } from '../models/Driver.model';


@Component({
  selector: 'app-post-driver-button',
  templateUrl: './post-driver-button.component.html',
  styleUrls: ['./post-driver-button.component.css']
})
export class AddDriverButtonComponent {

  constructor(private driverService:DriverService) { }

  @Output() postEvent = new EventEmitter<Driver>()

  onPostDriver() {
    //todo generate from form
    const tmpDriver:Driver = {
      id: 5,
      name: 'driver2',
      email: 'driver@gmail.com',
      phone: '052-8888888',
      location: {lat: 0, lng: 0},
      tasks: [
        {
          id: "0",
          location: {lat: 0, lng: 0}
        }
      ]
    }

    this.driverService
      .postDriver(tmpDriver)
      .subscribe((driver:Driver) => {
        this.postEvent.emit(driver)
      })
  }

}
