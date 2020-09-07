import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-career',
  templateUrl: './admin-career.component.html',
  styleUrls: ['./admin-career.component.css']
})
export class AdminCareerComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public careers;

  public formData = {
    name:null,
    description:null,
    school:null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

  edit(){

  }

  register(){
    axios.post('http://localhost:8000/api/career/register/', this.formData).then(function (response) {
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
}
