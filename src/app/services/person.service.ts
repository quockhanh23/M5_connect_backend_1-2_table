import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/person";

const API_URL = 'http://localhost:8080/api/ps';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(API_URL)
  }

  searchByName(name:string): Observable<Person[]> {
    return this.httpClient.get<Person[]>(API_URL + `/searchName?name=${name}`).pipe()
  }
  orderByASC(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(API_URL + `/orderByASC`)
  }

  getById(id: any): Observable<Person> {
    return this.httpClient.get<Person>(API_URL + `/${id}`)
  }

  delete(id: any): Observable<Person> {
    return this.httpClient.delete<Person>(API_URL + `/${id}`)
  }

  update(id: string, person: Person): Observable<Person> {
    return this.httpClient.put<Person>(API_URL + `/${id}`, person)
  }

  save(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(API_URL, person)
  }

  notify1() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = "Successful!"
    }, 0)
  }

  notify2() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = " "
    }, 2000)
  }
}
