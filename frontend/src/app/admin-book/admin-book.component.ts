import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public books;

  public temp = {
    id : null,
    title : null,
    autor: null,
    domain: null,
    price: null,
  };

  public formData = {
    title:null,
    autor: null,
    domain:null,
    price:null,
  }

  public file;

  public error;

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/book').subscribe(
      data => this.books = data,
      error => console.log(error)
    )
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  register(){
    const uploadData = new FormData();
    if (this.file === undefined) {
      this.error = "sélectionner un fichier"
    }else{
      uploadData.append('myFile', this.file, this.file.name)
      uploadData.append('title', this.formData.title)
      uploadData.append('autor', this.formData.autor)
      uploadData.append('price', this.formData.price)
      uploadData.append('domain', this.formData.domain)

      this.http.post('http://localhost:8000/api/book/register/', uploadData).subscribe(
        data => console.log(data),
        error => {
          console.log(error.error.text)
          if (error.error.text === "success") {
            alert('Ajout du livre réussi')
            this.ngOnInit()
          } else {
            alert("erreur lors de l'ajout, veuillez reéssayer")
          }
        });
    }
    
  }

  delete(){
    
    this.http.post('http://localhost:8000/api/book/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('livre supprimé')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  
  }

  store(book){
    this.temp = book
  }

  edit(){
    const data = new FormData();
    if(this.file !== undefined){
      data.append('myFile', this.file, this.file.name)
      data.append('id', this.temp.id)
      data.append('title', this.temp.title)
      data.append('autor', this.temp.autor)
      data.append('price', this.temp.price)
      data.append('domain', this.temp.domain)
    }else{
      data.append('id', this.temp.id)
      data.append('title', this.temp.title)
      data.append('autor', this.temp.autor)
      data.append('price', this.temp.price)
      data.append('domain', this.temp.domain)
    }

    this.http.post('http://localhost:8000/api/book/update/', data).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('modification du livre réussie')
          this.ngOnInit()
        } else {
          alert("erreur lors de la modification, veuillez reéssayer")
        }
      });

  }

}
