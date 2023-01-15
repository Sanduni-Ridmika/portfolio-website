import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(serviceService:ServiceService) {
    this.tags = serviceService.getAllTags();
  }

}
