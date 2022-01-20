import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  book!: Book[]

  constructor(private bookService: BookService,
              private router: Router,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(result => {
      this.book = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }
  deleteBook(id: any) {
    if (confirm("Really want delete?")) {
      this.bookService.delete(id).subscribe(() => {
        this.ngOnInit()
        // @ts-ignore
        document.getElementById("alo").innerHTML = "Delete successful!"
        this.personService.notify2()
      })
    }
  }
}
