import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRoutingModule} from './person-routing.module';
import {CreatePersonComponent} from "./create-person/create-person.component";
import {ListPersonComponent} from "./list-person/list-person.component";
import {EditPersonComponent} from "./edit-person/edit-person.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreatePersonComponent,
    ListPersonComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonModule {
}
