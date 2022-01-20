import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ListPersonComponent} from './components/person/list-person/list-person.component';
import {EditPersonComponent} from './components/person/edit-person/edit-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreatePersonComponent} from './components/person/create-person/create-person.component';
import { ListBookComponent } from './components/book/list-book/list-book.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    EditPersonComponent,
    CreatePersonComponent,
    ListBookComponent,
    CreateBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
