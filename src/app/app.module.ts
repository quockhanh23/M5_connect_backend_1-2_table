import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListPersonComponent } from './components/list-person/list-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreatePersonComponent } from './components/create-person/create-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    EditPersonComponent,
    CreatePersonComponent
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
export class AppModule { }
