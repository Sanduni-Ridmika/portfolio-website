import { Injectable } from '@angular/core';
import { sample_services } from 'src/data';
import { Service } from '../shared/models/Service';

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
}
