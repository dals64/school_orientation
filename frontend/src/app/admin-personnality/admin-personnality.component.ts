import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-personnality',
  templateUrl: './admin-personnality.component.html',
  styleUrls: ['./admin-personnality.component.css']
})
export class AdminPersonnalityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public personnalities;

  public formData = {
    name:null,
    description:null
  }

  public careers;

  public temp = {
    id : null,
    name : null,
    description:null,
    career: null,
    careerDel : null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/personnality').subscribe(
      data => this.personnalities = data,
      error => console.log(error)
    )
  }

  register(){
    axios.post('http://localhost:8000/api/personnality/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de la personnalité réussi')
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  delete(){
    axios.post('http://localhost:8000/api/personnality/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('personnalitée supprimée')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  edit(){
    axios.post('http://localhost:8000/api/personnality/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('Modification réussie')
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  store(personnality){
    this.temp.id = personnality.id
    this.temp.name = personnality.name 
    this.temp.description = personnality.description

    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

  storeDel(personnality){
    this.temp.id = personnality.id
  }


}
