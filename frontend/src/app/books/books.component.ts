import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public books;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/book').subscribe(
      data => this.books = data,
      error => console.log(error)
    )
  }

  openBook(book){
    console.log(book)
  }

}
