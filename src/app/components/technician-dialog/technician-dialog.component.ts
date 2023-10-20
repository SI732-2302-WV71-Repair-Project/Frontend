import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-technician-dialog',
  templateUrl: './technician-dialog.component.html',
  styleUrls: ['./technician-dialog.component.css']
})
export class TechnicianDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TechnicianDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
