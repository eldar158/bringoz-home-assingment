import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DriverDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DriverData) {
    this.localData = {...data};
  }

  ngOnInit() {
    const phoneRegex = new RegExp()
    const emailRegex = new RegExp()
    this.myForm = this.fb.group({
      name: [this.localData.name, Validators.required],
      phone: [this.localData.phone, [Validators.required, Validators.pattern(phoneRegex)]],
      email: [this.localData.email, [Validators.required, Validators.pattern(emailRegex)]],
    });
  }



  doAction(){
    this.dialogRef.close({data:this.localData});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
