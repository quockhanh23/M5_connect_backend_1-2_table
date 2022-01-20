import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {AuthorService} from "../../../services/author.service";
import {Author} from "../../../models/author";
import {Book} from "../../../models/book";

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
    author_id: new FormControl(''),
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(rs => {
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

  update() {
    const book = {
      name: this.bookForm.value.name,
      price: this.bookForm.value.price,
      author_id: {
        id: this.bookForm.value.author_id
      }
    }
    console.log(book);
    // @ts-ignore
    this.bookService.updatePost(this.book.id, book).subscribe(() => {
      alert("Thành công!")
      this.router.navigate(["/book"]);
    })
  }
}
