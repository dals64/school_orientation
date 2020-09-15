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

      axios.post('http://localhost:8000/api/book/register/', uploadData).then(function (response) {
        if (response.data = 'success') {
          alert('Ajout du livre réussi')
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
        console.log(response.data)
      }).catch(function (error) {
        console.log(error);
        alert("erreur lors de connexion au serveur, veuillez reéssayer")
      });
    }
    
  }

  delete(){
    console.log(this.temp)
    axios.post('http://localhost:8000/api/book/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('Suppression du livre réussie')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
      console.log(response.data)
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
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

  
    axios.post('http://localhost:8000/api/book/update/', data).then(function (response) {
      if (response.data === 'success') {
        alert('modification du livre réussie')
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
      console.log(response.data)
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
