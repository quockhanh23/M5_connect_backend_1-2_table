import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {EditBookComponent} from "./edit-book/edit-book.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListBookComponent,
    EditBookComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule {

}
