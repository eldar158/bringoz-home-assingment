import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DriverData {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.css']
})
export class DriverDialogComponent {
  localData:any;

  constructor(
    public dialogRef: MatDialogRef<DriverDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DriverData) {
    this.localData = {...data};
  }

  doAction(){
    this.dialogRef.close({data:this.localData});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
