import { Component, ViewChild } from '@angular/core';
import { LinksService } from '../links.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
})
export class LinkFormComponent {
  @ViewChild('f') addLinkForm: NgForm;

  linkAddress = '';
  linkTitle = '';

  constructor(private linkService: LinksService) {}

  onAdd(form: NgForm) {
    this.linkAddress = form.value.linkAddress;
    this.linkTitle = form.value.linkTitle;

    this.linkService.addLink({
      id: this.linkService.getLinks().length + 1,
      title: this.linkTitle,
      link: this.linkAddress,
      upvotes: 0,
      downvotes: 0,
    });
    this.addLinkForm.resetForm();
  }
}
