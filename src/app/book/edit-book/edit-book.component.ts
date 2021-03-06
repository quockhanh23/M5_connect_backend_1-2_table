import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author";
import {Book} from "../../models/book";
import {PersonService} from "../../services/person.service";
import {iif} from "rxjs";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book!: Book
  author!: Author[]
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private authorService: AuthorService,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(rs => {
      this.author = rs
      console.log(rs)
    });
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id')
      console.log(id);
      // @ts-ignore
      this.bookService.getById(id).subscribe(result => {
        this.bookForm = new FormGroup({
          id: new FormControl(result.id),
          name: new FormControl(result.name),
          price: new FormControl(result.price),
          author: new FormControl(result.author?.id),
        });
        console.log(result)
      }, error => {
        console.log("Lỗi: " + error)
      })
    })
  }

  updateBook() {
    let book = {
      name: this.bookForm.value.name,
      price: this.bookForm.value.price,
      author: {
        id: this.bookForm.value.author
      }
    }
    console.log(book);
    // @ts-ignore
    this.bookService.update(this.bookForm.value.id, book).subscribe(() => {
      console.log("In come to next")
      this.router.navigate(["/book/list"]).then(console.log);
      this.personService.notify1()
      this.personService.notify2()
      console.log("Ending next")
    }, error => {
      console.log("Lỗi: " + error)
    })
  }

  deleteBook1(id: any) {
    this.bookService.delete(id).subscribe(() => {
      this.router.navigate(["/book/list"]).then(console.log);
      // @ts-ignore
      this.personService.notify1()
      this.personService.notify2()
    }, error => {
      console.log("Lỗi: " + error)
    })

  }
}
