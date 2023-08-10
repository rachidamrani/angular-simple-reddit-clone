import { Injectable } from '@angular/core';
import { Link } from './link.model';
import { Subject } from 'rxjs';

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

  getLinks(): Link[] {
    return this.links;
  }

  getLink(id: number | undefined): Link | undefined {
    return this.links.find((l) => l.id === id);
  }

  addLink(link: Link): void {
    this.links?.push(link);
  }

  removeLink(id: number): void {
    // code here
  }

  upVote(id: number | undefined) {
    const foundEltIndex = this.links.findIndex((elt) => elt.id === id);
    this.links[foundEltIndex].upvotes++;
  }

  downVote(id: number | undefined) {
    const foundEltIndex = this.links.findIndex((elt) => elt.id === id);

    this.links[foundEltIndex].downvotes++;
  }
}
