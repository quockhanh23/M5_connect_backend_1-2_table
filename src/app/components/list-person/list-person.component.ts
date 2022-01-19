import {Component, OnInit} from '@angular/core';
import {Person} from "../../models/person";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  people!: Person[]

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.personService.getAll().subscribe(result => {
      this.people = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  // @ts-ignore
  deletePerson(id) {
    if (confirm("Really want delete?")) {
      this.personService.delete(id).subscribe(() => {
        alert("Success")
        this.ngOnInit()
      })
    }
  }

}
