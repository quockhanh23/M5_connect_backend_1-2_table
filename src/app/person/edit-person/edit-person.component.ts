import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

const url = "/person/list"

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person!: Person;

  constructor(private personService: PersonService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  personForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
  });

  ngOnInit(): void {
    this.getAll();
    this.activateRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id)
      this.personService.getById(id).subscribe(result => {
        this.person = result
        this.personForm = new FormGroup({
          id: new FormControl(result.id),
          name: new FormControl(result.name),
          address: new FormControl(result.address),

        });
        console.log(result)
      }, error => {
        console.log(error)
      })
    })
    this.person = {
      name: '',
      address: ''
    }
  }

  getAll() {
    // @ts-ignore
    this.person = this.personService.getAll();
  }

  edit(): any {
    const person = this.personForm.value
    console.log(person)
    // @ts-ignore
    this.personService.update(this.person.id, person).subscribe(() => {
      this.router.navigateByUrl(url).then(r => {
        if (r) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      })
      this.personService.notify1()
      this.personService.notify2()
    })
  }

  delete(): void {
    this.personService.delete(this.person.id).subscribe(() => {
      this.router.navigateByUrl(url)
      this.personService.notify1()
      this.personService.notify2()
    })
  }
}
