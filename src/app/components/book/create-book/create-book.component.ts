import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {Author} from "../../../models/author";
import {Book} from "../../../models/book";
import {AuthorService} from "../../../services/author.service";

const url = "/"

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  author!: Author[]

  bookForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    author_id: new FormControl(),
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private bookService: BookService,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(rs => {
      this.author = rs
      console.log(rs)
    });
  }

  submit() {
    const book = {
      name: this.bookForm.value.name,
      price: this.bookForm.value.price,
      author: {
        id: this.bookForm.value.author_id
      }
    }
    this.bookService.save(book).subscribe(() => {
      alert("thêm thành công")
      this.router.navigateByUrl(url)
    })
  }
}
