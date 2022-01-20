import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";

const API_URL = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL)
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book)
  }
  getById(id: any): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/${id}`)
  }

}
