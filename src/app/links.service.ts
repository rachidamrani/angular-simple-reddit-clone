import { Injectable } from '@angular/core';
import { Link } from './link.model';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  links: Link[] | undefined;
  constructor() {}

  getLinks() {
    return this.links;
  }

  addLink(link: Link) {
    this.links?.push(link);
  }

  removeLink(id: number) {
    // code here
  }
}
