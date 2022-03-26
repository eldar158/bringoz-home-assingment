import { Component, Input, OnInit } from '@angular/core';
import { Observable, first, from } from 'rxjs';
import { Driver } from '../models/Driver.model';

@Component({
  selector: 'app-driver-map',
  templateUrl: './driver-map.component.html',
  styleUrls: ['./driver-map.component.css']
})
export class DriverMapComponent implements OnInit {

  constructor() { }

  @Input() drivers!:Observable<Driver[]>
  @Input() lat:number = 0
  @Input() lng:number = 0
  @Input() zoom = 9

  ngOnInit(): void {
    this.drivers.subscribe((drivers) => {
      const first = drivers[0]
      this.lat = first.location.lat
      this.lng = first.location.lng
    })
  }
}
