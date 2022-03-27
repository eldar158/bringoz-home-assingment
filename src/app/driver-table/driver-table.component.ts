import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

import { Driver } from '../models/Driver.model';
import { DriverService } from '../driver.service';

import { MatDialog } from '@angular/material/dialog'
import { MatTable } from '@angular/material/table';

import { DriverDialogComponent } from '../driver-dialog/driver-dialog.component'

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnChanges{

  @Input() drivers:Driver[] = []
  @Input() selectedDriverId:number = 0
  titles:string[] = []

  constructor(
    private driverService:DriverService,
    private dialog:MatDialog
  ) { }

  @Output() selectEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()
  @Output() putEvent = new EventEmitter<Driver>()

  @ViewChild(MatTable) table!: MatTable<any>

  columnsToDisplay = ['id', 'name', 'phone', 'email', 'location', 'tasks', 'actions'];


  ngOnChanges(): void {
    const firstDriver = this.drivers[0]
    this.titles = Object.keys(firstDriver)
  }

  onSelectDriver(id:number) {
    this.selectEvent.emit(id)
  }

  onPutDriver(event:Event, driver:Driver) {
    event.stopPropagation()
    this.dialog.open(DriverDialogComponent, {data: driver}).afterClosed().subscribe((result) => {
      if (!result) return

      const editedDriver = JSON.parse(JSON.stringify(driver))
      editedDriver.name = 'name'
      editedDriver.phone = '050-1234567'
      editedDriver.email = 'email@provider.com'

      this.driverService
        .putDriver(editedDriver)
        .subscribe((driver:Driver) => {
          this.putEvent.emit(driver)
        })
    })
  }

  onDeleteDriver(event:Event, name:string, id:number) {
    event.stopPropagation()
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
