import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { LinkFormComponent } from './link-form/link-form.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    LinkFormComponent,
    LinksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
