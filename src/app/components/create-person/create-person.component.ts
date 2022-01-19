import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../../services/person.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  personForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
  });

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const person = {
      name: this.personForm.value.name,
      address: this.personForm.value.address,
    }
    console.log(person)
    // @ts-ignore
    this.personService.save(person).subscribe(() => {
      alert("Success")
    })
  }
}
