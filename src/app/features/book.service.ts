import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRoot } from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://stephen-king-api.onrender.com/api/shorts';

  //Fazer injeção de dependência do httpClient para 'comunicar' na internet
  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookRoot> {
    return this.http.get<BookRoot>(this.apiUrl);
  }
}
