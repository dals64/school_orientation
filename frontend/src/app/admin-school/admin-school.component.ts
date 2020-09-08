import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-admin-school',
  templateUrl: './admin-school.component.html',
  styleUrls: ['./admin-school.component.css']
})
export class AdminSchoolComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public schools;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/school').subscribe(
      data => this.schools = data,
      error => console.log(error)
    )
  }

  public temp = {
    id:null,
    name: null,
    location: null,
    site: null,
    contact: null,
    outlet: null,
    outletDel:null
  }

  public formData = {
    name:null,
    location:null,
    site:null,
    contact:null,
  }

  public outlets;

  edit(){
    axios.post('http://localhost:8000/api/school/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('Modification de l\'école réussie')
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  register(){
    axios.post('http://localhost:8000/api/school/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de l\'école réussi')
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  store(school){
    this.temp.id = school.id
    this.temp.name = school.name
    this.temp.location = school.location
    this.temp.site = school.site
    this.temp.contact = school.contact
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  storeDel(school){
    this.temp.id = school.id
  }

  delete(){
    axios.post('http://localhost:8000/api/school/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('école supprimée')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
