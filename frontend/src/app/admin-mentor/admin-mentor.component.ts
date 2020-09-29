import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-mentor',
  templateUrl: './admin-mentor.component.html',
  styleUrls: ['./admin-mentor.component.css']
})
export class AdminMentorComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public mentors;

  public temp ={
    id:null,
    name: null,
    contact: null,
    email: null
  }

  public formData = {
    name:null,
    contact:null,
    email:null
  }

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/mentor').subscribe(
      data => this.mentors = data,
      error => console.log(error)
    )
  }

  edit(){
    axios.post('http://localhost:8000/api/mentor/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('modification du mentor réussie');
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  store(mentor){
    this.temp.id = mentor.id
    this.temp.name = mentor.name
    this.temp.email = mentor.email
    this.temp.contact = mentor.contact
  }

  storeDel(mentor){
    this.temp.id = mentor.id
  }

  register(){
    axios.post('http://localhost:8000/api/mentor/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout du mentor réussi');
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }
  
  delete(){
    axios.post('http://localhost:8000/api/mentor/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('mentor supprimé');
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
