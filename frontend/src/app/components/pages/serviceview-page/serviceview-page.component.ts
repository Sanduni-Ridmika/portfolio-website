import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-serviceview-page',
  templateUrl: './serviceview-page.component.html',
  styleUrls: ['./serviceview-page.component.css']
})
export class ServiceviewPageComponent {
  service!: Service;
  constructor(activatedRoute:ActivatedRoute, serviceService:ServiceService) {
    activatedRoute.params.subscribe((params)=> {
      if(params.id)
      this.service = serviceService.getServiceById(params.id);
    })
  }
}
