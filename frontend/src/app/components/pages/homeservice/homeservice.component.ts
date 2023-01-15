import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-homeservice',
  templateUrl: './homeservice.component.html',
  styleUrls: ['./homeservice.component.css']
})
export class HomeserviceComponent {

  services:Service[] = [];
  constructor(private serviceService:ServiceService, activatedRoute:ActivatedRoute) {
    //listen to the route param
    //anytime when the param changed call the function subscribe
    activatedRoute.params.subscribe((params) => {
      //if there's a search term it will show it or else show every service
      if(params.searchTerm)
      this.services = this.serviceService.getAllServicesBySearchTerm(params.searchTerm);
      else if (params.tag)
      this.services = this.serviceService.getAllServicesByTag(params.tag);
      else
      this.services = serviceService.getAll();
    })
  }
}
