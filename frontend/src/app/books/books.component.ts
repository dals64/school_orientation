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
  loading = false;
  load1 = true;


  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/book').subscribe(
      data => {
        this.books = data
        this.load1 = false
      },
      error => console.log(error)
    )
  }

  openBook(book){
    this.http.post('http://localhost:8000/api/book/index/', book).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}
