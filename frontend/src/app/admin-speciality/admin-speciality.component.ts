import { Component, OnInit, EventEmitter, Testability } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-speciality',
  templateUrl: './admin-speciality.component.html',
  styleUrls: ['./admin-speciality.component.css']
})
export class AdminSpecialityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public temp = {
    id:null,
    name:null,
    career:null,
    careerDel:null
  }
  public test;
  
  public careers;

  public formData = {
    name: null,
    career: null
  }


  public specialities;

  ngOnInit(): void {
   /*
    axios.get('http://localhost:8000/api/speciality').then(function (response) {
      
    }).catch(function (error) {
      console.log(error);
    })
    */
    this.http.get('http://localhost:8000/api/speciality').subscribe(
      data => this.specialities = data,
      error => console.log(error)
    );
  }

  edit(){
    axios.post('http://localhost:8000/api/speciality/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('modification de la spécialité réussie')
      } else {
        alert("erreur lors de la modification")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }


  register(){
    
    axios.post('http://localhost:8000/api/speciality/register/',this.formData).then(function (response) {
      if (response.data = 'success'){
        alert('Ajout de la spécialité réussi')
      }else{
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  delete(){
    axios.post('http://localhost:8000/api/speciality/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('spécialité supprimée')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

  storeDel(speciality){
    this.temp.id = speciality.id;
  }

  store(speciality){
    this.temp.name = speciality.name
    this.temp.id = speciality.id
    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

}
