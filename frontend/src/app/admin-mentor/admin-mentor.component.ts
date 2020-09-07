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

  public formData = {
    name:null,
    contact:null,
    email:null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/mentor').subscribe(
      data => this.mentors = data,
      error => console.log(error)
    )
  }

  edit(){
}

  register(){
    axios.get('http://localhost:8000/api/mentor/register/').then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de la débouchée réussi');
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
