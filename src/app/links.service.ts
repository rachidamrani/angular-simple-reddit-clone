import { Injectable } from '@angular/core';
import { Link } from './link.model';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  links: Link[] = [
    {
      id: 1,
      title: 'Angular Docs',
      link: 'https://angular.io/',
      upvotes: 4,
      downvotes: 1,
    },
    {
      id: 2,
      title: 'React Quick Start',
      link: 'https://legacy.reactjs.org/docs/getting-started.html',
      upvotes: 3,
      downvotes: 0,
    },
  ];

  constructor() {}

  getLinks(): Link[] {
    return [...this.links];
  }

  addLink(link: Link): void {
    this.links?.push(link);
  }

  removeLink(id: number): void {
    // code here
  }
}
