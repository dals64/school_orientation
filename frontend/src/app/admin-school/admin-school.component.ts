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

  public formData = {
    name:null,
    location:null,
    site:null,
    contact:null,
    outlet:null
  }

  edit(){

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

}
