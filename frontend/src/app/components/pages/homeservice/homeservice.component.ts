import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-homeservice',
  templateUrl: './homeservice.component.html',
  styleUrls: ['./homeservice.component.css']
})
export class HomeserviceComponent {

  services:Service[] = [];
  constructor(private serviceService:ServiceService)
  {
    this.services = serviceService.getAll();
  }


}
