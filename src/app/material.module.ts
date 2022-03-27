import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
