import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver.model';

@Component({
  selector: 'app-driver-map',
  templateUrl: './driver-map.component.html',
  styleUrls: ['./driver-map.component.css']
})
export class DriverMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  lat = 33.96
  lng = -118.27
  zoom = 8

  @Input() drivers!:Observable<Driver[]>
}
