import { Component, Input, OnChanges } from '@angular/core';
import { Driver } from '../models/Driver.model';

@Component({
  selector: 'app-driver-map',
  templateUrl: './driver-map.component.html',
  styleUrls: ['./driver-map.component.css']
})
export class DriverMapComponent implements OnChanges {

  @Input() drivers:Driver[] = []
  @Input() selectedDriverId:number = -1
  @Input() lat:number = 0
  @Input() lng:number = 0
  @Input() zoom = 9

  taskMarker = {
    url: './assets/images/taskMarker.png',
    scaledSize: {
      width: 18.5,
      height: 30
    }
  }

  ngOnChanges(): void {
    const first = this.drivers[0]
    this.lat = first.location.lat
    this.lng = first.location.lng
  }
}
