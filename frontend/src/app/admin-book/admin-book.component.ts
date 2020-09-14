import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent implements OnInit {

  constructor() { }

  public formData = {
    title:null,
    autor: null,
    domain:null,
    price:null,
    files : null
  }

  ngOnInit(): void {
  }

  onFileChange(event) {
    this.formData.files = event.target.files;
    console.log(event);
  }

  register(){
    axios.post('http://localhost:8000/api/book/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de la carrière réussi')
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  delete(){}

  edit(){}

}
