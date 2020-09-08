import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-outlet',
  templateUrl: './admin-outlet.component.html',
  styleUrls: ['./admin-outlet.component.css']
})
export class AdminOutletComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public outlets;

  public temp = {
    id:null,
    name:null,
    description:null,
  }

  public formData = {
    name:null,
    description:null,
    school:null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  edit(){
    axios.post('http://localhost:8000/api/outlet/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('modification réussie')
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  store(outlet){
    this.temp.id = outlet.id
    this.temp.name= outlet.name
    this.temp.description = outlet.description
  }

  storeDel(outlet){
    this.temp.id = outlet.id
  }

  register(){
    axios.post('http://localhost:8000/api/outlet/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de la débouchée réussi')
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  delete(){
    axios.post('http://localhost:8000/api/outlet/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('élément supprimé')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
