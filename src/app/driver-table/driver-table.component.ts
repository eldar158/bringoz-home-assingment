import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Driver } from '../models/Driver.model';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnChanges{

  @Input() drivers:Driver[] = []
  titles:string[] = []

  constructor(private driverService:DriverService) { }

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() putEvent = new EventEmitter<Driver>()

  ngOnChanges(): void {
    const first = this.drivers[0]
    this.titles = Object.keys(first)
  }

  onPutDriver(driver:Driver) {
    //todo open popup form and when done return the inputed:
    //use service with the new fields

    const editedDriver = JSON.parse(JSON.stringify(driver))

    editedDriver.name = 'name'
    editedDriver.phone = '050-1234567'
    editedDriver.email = 'email@provider.com'

    this.driverService
      .putDriver(editedDriver)
      .subscribe((driver:Driver) => {
        this.putEvent.emit(driver)
      })
  }

  onDeleteDriver(name:string, id:number) {
    if (confirm(`Are you sure you want to delete driver "${name}" ?`)) {
      this.driverService
        .deleteDriver(id)
        .subscribe((driver:Driver) => {
          this.deleteEvent.emit(id)
        })
    } else {
      // Do nothing!
    }
  }
}
