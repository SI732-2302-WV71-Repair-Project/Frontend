import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-report-dialog',
  templateUrl: './download-report-dialog.component.html',
  styleUrls: ['./download-report-dialog.component.css']
})
export class DownloadReportDialogComponent {
  constructor(public dialogRef: MatDialogRef<DownloadReportDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
