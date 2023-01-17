import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let servicesObservable:Observable<Service[]>;
    //listen to the route param
    //anytime when the param changed call the function subscribe
    activatedRoute.params.subscribe((params) => {
      //if there's a search term it will show it or else show every service
      if(params.searchTerm)
      servicesObservable = this.serviceService.getAllServicesBySearchTerm(params.searchTerm);
      else if (params.tag)
      servicesObservable = this.serviceService.getAllServicesByTag(params.tag);
      else
      servicesObservable = serviceService.getAll();

      servicesObservable.subscribe((serverServices) => {
        this.services = serverServices;
      })
    })
  }
}
