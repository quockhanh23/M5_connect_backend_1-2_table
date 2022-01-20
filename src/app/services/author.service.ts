import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";

const API_URL = 'http://localhost:8080/api/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(API_URL);
  }
  getById(id: any): Observable<Author> {
    return this.http.get<Author>(API_URL + `/${id}`)
  }
}
