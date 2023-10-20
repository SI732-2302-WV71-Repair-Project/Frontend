import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';
import { MatDialog } from '@angular/material/dialog';
import { TechnicianDialogComponent } from '../technician-dialog/technician-dialog.component'; 

@Component({
  selector: 'app-my-technicians',
  templateUrl: './my-technicians.component.html',
  styleUrls: ['./my-technicians.component.css']
})
export class MyTechniciansComponent implements OnInit{
  technicians: any[] = [];
  constructor(private technicianService: TechnicianService,private dialog: MatDialog) { }

  openTechnicianDialog(technician:any): void {
    const dialogRef = this.dialog.open(TechnicianDialogComponent, {
      width: '400px', // Tamaño del diálogo
      data: technician, // Pasa el objeto technician al diálogo
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Lógica a realizar después de cerrar el diálogo (si es necesario)
    });
  }
  ngOnInit(): void{
    this.loadTechnicians();
  }

  loadTechnicians(){
    this.technicianService.getTechnician().subscribe(
      (data) => {
        this.technicians = data; // Assign the received data to the technicians property
      },
      (error) => {
        console.error('Error fetching technicians:', error);
      }
    );
  }
}
