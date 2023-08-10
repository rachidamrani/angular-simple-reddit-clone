import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../link.model';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() linkEl: Link | undefined;
  @Input() linkId: number | undefined;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linkEl = this.linksService.getLink(this.linkId);
  }

  onUpVote() {}

  onDownVote() {}
}
