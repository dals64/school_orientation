import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-entreprise',
  templateUrl: './admin-entreprise.component.html',
  styleUrls: ['./admin-entreprise.component.css']
})
export class AdminEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public temp = {
    id:null,
    name:null,
    location:null,
    site:null,
    contact:null
  }

  public formData = {
    name:null,
    location:null,
    site:null,
    contact:null
  }

  p: number = 1;

  public entreprises;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/entreprise').subscribe(
      data => this.entreprises = data,
      error => console.log(error)
    )
  }

  register(){
    axios.post('http://localhost:8000/api/entreprise/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Entreprise enregistrée')
      } else {
        alert("erreur lors de la création, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });

  }

  edit(){
    axios.post('http://localhost:8000/api/entreprise/update/', this.temp).then(function (response) {
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

  delete(){
    axios.post('http://localhost:8000/api/entreprise/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('Suppression réussie')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  store(entreprise){
    this.temp.id = entreprise.id
    this.temp.location = entreprise.location
    this.temp.name = entreprise.name
    this.temp.site = entreprise.site
    this.temp.contact = entreprise.contact
  }

  storeDel(entreprise){
    this.temp.id = entreprise.id
  }

}
