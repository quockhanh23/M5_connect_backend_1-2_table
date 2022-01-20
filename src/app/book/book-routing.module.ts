import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {ListBookComponent} from "./list-book/list-book.component";

const routes: Routes = [
  {
    path: 'create', component: CreateBookComponent
  },
  {
    path: 'edit/:id', component: EditBookComponent
  },
  {
    path: 'list', component: ListBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
