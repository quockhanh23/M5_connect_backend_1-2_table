import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPersonComponent} from "./components/list-person/list-person.component";
import {EditPersonComponent} from "./components/edit-person/edit-person.component";
import {CreatePersonComponent} from "./components/create-person/create-person.component";

const routes: Routes = [
  {
    path: '', component: ListPersonComponent
  },
  {
    path: 'create', component: CreatePersonComponent
  },
  {
    path: 'edit/:id', component: EditPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
