import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadReportDialogComponent } from '../download-report-dialog/download-report-dialog.component';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  
constructor(private dialog: MatDialog) {}
  reports = [
    {
      title: 'Celular con la pantalla rota en la parte inferior',
      diagnosis: 'El celular se cayó y se rompió la pantalla en la parte inferior...',
      procedure: 'Se procederá a cambiar la pantalla del celular, se le hará un mantenimiento general...',
      repair: 'Se cambió la pantalla, se le hizo un mantenimiento general y se le hizo una limpieza...',
      image: 'ruta-de-la-imagen-1.jpg' // Ruta de la imagen
    },
    {
      title: 'Celular con la pantalla rota en la parte superior',
      diagnosis: 'El celular se cayó y se rompió la pantalla en la parte inferior...',
      procedure: 'Se procederá a cambiar la pantalla del celular, se le hará un mantenimiento general...',
      repair: 'Se cambió la pantalla, se le hizo un mantenimiento general y se le hizo una limpieza...',
      image: 'ruta-de-la-imagen-2.jpg' // Ruta de la imagen
    },
    {
      title: 'Laptop con la pantalla negra en la parte superior',
      diagnosis: 'El celular se cayó y se rompió la pantalla en la parte inferior...',
      procedure: 'Se procederá a cambiar la pantalla del celular, se le hará un mantenimiento general...',
      repair: 'Se cambió la pantalla, se le hizo un mantenimiento general y se le hizo una limpieza...',
      image: 'ruta-de-la-imagen-3.jpg' // Ruta de la imagen
    }
  ];

  showSpinner = false;

  downloadReport() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
      this.openSuccessDialog();
    }, 2000);
  }
  openSuccessDialog() {
    const dialogRef = this.dialog.open(DownloadReportDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      // Lógica a realizar después de cerrar el diálogo (si es necesario)
    });
  }
}
