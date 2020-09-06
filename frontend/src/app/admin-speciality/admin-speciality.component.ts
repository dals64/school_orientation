import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-speciality',
  templateUrl: './admin-speciality.component.html',
  styleUrls: ['./admin-speciality.component.css']
})
export class AdminSpecialityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public formData = {
    name: null,
    career: null
  }

  list = [];

  ngOnInit(): void {
    axios.get('http://localhost:8000/api/speciality').then(function (response) {
      this.list = response.data;
      console.log(this.list)
    }).catch(function (error) {
      console.log(error);
    });
  }

  edit(){
    alert('editer')
  }


  register(){
    
    axios.post('http://localhost:8000/api/speciality/register/',this.formData).then(function (response) {
      if (response.data = 'success'){
        alert('Ajout de la spécialité réussie')
      }else{
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
    
  }

}
