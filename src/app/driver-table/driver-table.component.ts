import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver.model';

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent {
  @Input() drivers!:Observable<Driver[]>
}
