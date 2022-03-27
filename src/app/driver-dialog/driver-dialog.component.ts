export interface UsersData {
  name: string;
  phone: string;
  email: string;
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.css']
})
export class DriverDialogComponent {

  // action:string;
  // local_data:any;

  // constructor(
  //   public dialogRef: MatDialogRef<DialogBoxComponent>,
  //   //@Optional() is used to prevent error if no data is passed
  //   @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
  //   console.log(data);
  //   this.local_data = {...data};
  //   this.action = this.local_data.action;
  // }

  // doAction(){
  //   this.dialogRef.close({event:this.action,data:this.local_data});
  // }

  // closeDialog(){
  //   this.dialogRef.close({event:'Cancel'});
  // }

}
