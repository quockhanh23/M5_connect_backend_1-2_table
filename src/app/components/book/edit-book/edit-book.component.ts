import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {AuthorService} from "../../../services/author.service";
import {Author} from "../../../models/author";
import {Book} from "../../../models/book";
import {PersonService} from "../../../services/person.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book!: Book
  author!: Author[]
  bookForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    author123: new FormControl(''),
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
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id')
      console.log(id);
      // @ts-ignore
      this.bookService.getById(id).subscribe(result => {
        this.book = result;
        console.log(result)
      }, error => {
        console.log(error);
      })
    })
  }

  updateBook() {

    const book = {
      name: this.bookForm.value.name,
      price: this.bookForm.value.price,
      author: {
        id: this.bookForm.value.author123
      }
    }
    console.log(book);
    // @ts-ignore
    this.bookService.update(this.book.id, book).subscribe(() => {
      this.router.navigate(["/book"]);
      this.personService.notify1()
      this.personService.notify2()
    })
  }
}
