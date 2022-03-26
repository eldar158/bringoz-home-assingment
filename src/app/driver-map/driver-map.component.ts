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

  ngOnInit(): void {
  }

  @Input() drivers!:Observable<Driver[]>
  @Input() lat!:number
  @Input() lng!:number
  @Input() zoom!:number
}
