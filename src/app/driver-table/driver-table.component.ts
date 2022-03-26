import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver.model';

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnInit{

  @Input() drivers!:Observable<Driver[]>
  titles!:string[]

  ngOnInit(): void {
    this.drivers.subscribe((drivers) => {
      const first = drivers[0]
      this.titles = Object.keys(first)
    })
  }
}
