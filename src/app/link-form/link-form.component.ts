import { Component } from '@angular/core';
import { LinksService } from '../links.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
})
export class LinkFormComponent {
  addLinkForm: NgForm;
  linkAddress = '';
  linkTitle = '';

  constructor(private linkService: LinksService) {}

  onAdd(form: NgForm) {
    this.linkTitle = form.value.linkTitle;
    this.linkAddress = form.value.linkAddress;

    this.linkService.addLink({
      id: this.linkService.getLinks().length + 1,
      title: this.linkTitle,
      link: this.linkAddress,
      upvotes: 0,
      downvotes: 0,
    });
  }
}
