import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ListPersonComponent} from './person/list-person/list-person.component';
import {EditPersonComponent} from './person/edit-person/edit-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreatePersonComponent} from './person/create-person/create-person.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import {PersonModule} from "./person/person.module";
import {BookModule} from "./book/book.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PersonModule,
    BookModule
  ]

})
export class AppModule {
}
