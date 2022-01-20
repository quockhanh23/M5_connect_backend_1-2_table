import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPersonComponent} from "./components/person/list-person/list-person.component";
import {EditPersonComponent} from "./components/person/edit-person/edit-person.component";
import {CreatePersonComponent} from "./components/person/create-person/create-person.component";
import {CreateBookComponent} from "./components/book/create-book/create-book.component";
import {EditBookComponent} from "./components/book/edit-book/edit-book.component";
import {ListBookComponent} from "./components/book/list-book/list-book.component";

const routes: Routes = [
  {
    path: '', component: ListPersonComponent
  },
  {
    path: 'create', component: CreatePersonComponent
  },
  {
    path: 'edit/:id', component: EditPersonComponent
  },
  {
    path: 'bookCreate', component: CreateBookComponent
  },
  {
    path: 'bookEdit/:id', component: EditBookComponent
  },
  {
    path: 'book', component: ListBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
