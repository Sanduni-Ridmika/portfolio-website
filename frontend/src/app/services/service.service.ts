import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_services, sample_tags } from 'src/data';
import { SERVICES_BY_SEARCH_URL, SERVICES_BY_TAG_URL, SERVICES_TAGS_URL, SERVICES_URL, SERVICE_BY_ID_URL } from '../shared/constants/urls';
import { Service } from '../shared/models/Service';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Service[]> {
    return this.http.get<Service[]>(SERVICES_URL);
  }

  getAllServicesBySearchTerm(searchTerm:string) {
    return this.http.get<Service[]> (SERVICES_BY_SEARCH_URL + searchTerm);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(SERVICES_TAGS_URL);
  }
  // find specified services from tags
  getAllServicesByTag(tag:string): Observable<Service[]> {
    return tag === "All"?
    this.getAll():
    this.http.get<Service[]>(SERVICES_BY_TAG_URL + tag);
  }

  getServiceById(serviceId:string): Observable<Service> {
    return this.http.get<Service>(SERVICE_BY_ID_URL + serviceId);
  }
}

