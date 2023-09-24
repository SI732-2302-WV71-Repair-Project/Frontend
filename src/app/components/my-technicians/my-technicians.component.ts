import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-my-technicians',
  templateUrl: './my-technicians.component.html',
  styleUrls: ['./my-technicians.component.css']
})
export class MyTechniciansComponent implements OnInit{
  technicians: any[] = [];
  constructor(private technicianService: TechnicianService) { }

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
