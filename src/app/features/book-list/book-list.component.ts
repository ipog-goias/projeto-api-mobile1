import { Book } from './../model/book.model';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookRoot } from '../model/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  
  books: Book[] = [];
  
  constructor(private bookservice: BookService){

  }
  
  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookservice.getBooks().subscribe({
      next: (dados: BookRoot) => {
        this.books = dados.data
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    },
  
  )
  }

}
