import {Component, OnInit} from '@angular/core';
import {Person} from "../../models/person";
import {PersonService} from "../../services/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  people!: Person[]

  constructor(private personService: PersonService, private router: Router) {
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
        this.ngOnInit()
        // @ts-ignore
        document.getElementById("alo").innerHTML = "Delete successful!"
        setTimeout(() => {
          // @ts-ignore
          document.getElementById("alo").innerHTML = ""
        }, 2000)
      })
    }
  }
}
