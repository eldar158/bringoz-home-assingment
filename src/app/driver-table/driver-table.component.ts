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

  ngOnChanges(): void {
    const first = this.drivers[0]
    this.titles = Object.keys(first)
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
