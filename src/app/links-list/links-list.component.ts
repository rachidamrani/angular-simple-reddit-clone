import { Component, OnInit } from '@angular/core';
import { Link } from '../link.model';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css'],
})
export class LinksListComponent implements OnInit {
  links: Link[] | undefined;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.links = this.linksService.getLinks();
  }
}
