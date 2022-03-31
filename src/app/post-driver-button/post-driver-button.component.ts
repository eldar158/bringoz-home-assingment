import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { DriverService } from '../driver.service';
import { Driver } from '../models/Driver.model';

import { DriverDialogComponent } from '../driver-dialog/driver-dialog.component'


@Component({
  selector: 'app-post-driver-button',
  templateUrl: './post-driver-button.component.html',
  styleUrls: ['./post-driver-button.component.css']
})
export class AddDriverButtonComponent {

  constructor(
    private driverService:DriverService,
    private dialog:MatDialog
  ) { }

  @Input() drivers:Driver[] = []
  @Output() postEvent = new EventEmitter<Driver>()

  onPostDriver() {
    const newDriverId:number = highestId(this.drivers) + 1 // using simple incremented id's

    this.dialog.open(DriverDialogComponent, {data: {newDriverId:newDriverId}}).afterClosed().subscribe((result) => {
      if ( !result.data ) return // on cancel

      this.driverService
      .postDriver(result.data)
      .subscribe((driver:Driver) => {
        this.postEvent.emit(driver)
      })
    })
  }
}

function highestId(drivers:Driver[]):number {
  const ids = drivers.map(driver => driver.id)
  return Math.max.apply(null, ids)
}
