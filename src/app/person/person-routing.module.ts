import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPersonComponent} from "./list-person/list-person.component";
import {CreatePersonComponent} from "./create-person/create-person.component";
import {EditPersonComponent} from "./edit-person/edit-person.component";

const routes: Routes = [
  {
    path: 'create', component: CreatePersonComponent
  },
  {
    path: 'edit/:id', component: EditPersonComponent
  },
  {
    path: 'list', component: ListPersonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
