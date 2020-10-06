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
    this.http.post('http://localhost:8000/api/entreprise/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Ajout réussi')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      });

  }

  edit(){
    this.http.post('http://localhost:8000/api/entreprise/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('modification réussie')
          this.ngOnInit()
        } else {
          alert("erreur lors de la modification, veuillez reéssayer")
        }
      });
  }

  delete(){
    this.http.post('http://localhost:8000/api/entreprise/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('entreprise supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
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
