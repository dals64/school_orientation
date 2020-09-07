import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-outlet',
  templateUrl: './admin-outlet.component.html',
  styleUrls: ['./admin-outlet.component.css']
})
export class AdminOutletComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public outlets;

  public formData = {
    name:null,
    description:null,
    school:null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  edit(){

  }

  register(){
    axios.post('http://localhost:8000/api/outlet/register/', this.formData).then(function (response) {
      if (response.data = 'success') {
        alert('Ajout de la débouchée réussi')
      } else {
        alert("erreur lors de l'ajout, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }

}
