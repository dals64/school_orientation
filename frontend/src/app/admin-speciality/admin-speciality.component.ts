import { Component, OnInit, EventEmitter } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

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
    alert('editer')
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

}
