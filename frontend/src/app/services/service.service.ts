import { Injectable } from '@angular/core';
import { sample_services, sample_tags } from 'src/data';
import { Service } from '../shared/models/Service';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  //get all services from data.ts (in future this service should be connected to the backend to get the data from backend)
  getAll ():Service[] {
    return sample_services;
  }

  getAllServicesBySearchTerm(searchTerm:string) {
    return this.getAll().filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  // find specified services from tags
  getAllServicesByTag(tag:string):Service[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(service => service.tags?.includes(tag));
  }

  getServiceById(serviceId:string):Service {
    return this.getAll().find(service => service.id == serviceId) ?? new Service();
  }
}

