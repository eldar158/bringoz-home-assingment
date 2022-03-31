import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

import { Driver, defaultDriver } from '../models/Driver.model'


interface DriverDialogData {
  newDriverId?:number
  driver?:Driver
}

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.css']
})
export class DriverDialogComponent {

  localData:Driver;
  formAction:string;
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DriverDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data:DriverDialogData) {
      if ( data.newDriverId ) {
        this.localData = defaultDriver(data.newDriverId)
        this.formAction = 'new'
      } else {
        this.localData = JSON.parse(JSON.stringify(data.driver)) // deep copy
        this.formAction = 'edit'
      }
  }

  ngOnInit() {
    const phoneRegex = new RegExp("\\d{1}-\\d{3}-\\d{3}-\\d{4}")
    this.myForm = this.fb.group({
      name: [this.localData.name, Validators.required],
      phone: [this.localData.phone, [Validators.required, Validators.pattern(phoneRegex)]],
      email: [this.localData.email, [Validators.required, Validators.email]],
      lat: [this.localData.location.lat, [Validators.required, numberValidator(), Validators.min(-90), Validators.max(90)]],
      lng: [this.localData.location.lng, [Validators.required, numberValidator(), Validators.min(-180), Validators.max(180)]],
    });
  }

  doAction(){
    this.dialogRef.close({data:this.localData});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}

function numberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return isNaN(control.value) ?  {badValue: {value: control.value}} : null
  };
}


