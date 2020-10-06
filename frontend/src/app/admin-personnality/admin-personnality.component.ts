import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-personnality',
  templateUrl: './admin-personnality.component.html',
  styleUrls: ['./admin-personnality.component.css']
})
export class AdminPersonnalityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public personnalities;

  public formData = {
    name:null,
    description:null
  }

  public careers;

  public temp = {
    id : null,
    name : null,
    description:null,
    career: null,
    careerDel : null
  }

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/personnality').subscribe(
      data => this.personnalities = data,
      error => console.log(error)
    )
  }

  register(){
    this.http.post('http://localhost:8000/api/personnality/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('personalité ajoutée')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      });
  }

  delete(){
  
    this.http.post('http://localhost:8000/api/personnality/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('personnalitée supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  }

  edit(){
    
    this.http.post('http://localhost:8000/api/personnality/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          this.temp.career = null
          this.temp.careerDel = null
          alert('Modification réussie')
          this.ngOnInit()
        } else {
          alert("erreur lors de la modification")
        }
      });
  }

  store(personnality){
    this.temp.id = personnality.id
    this.temp.name = personnality.name 
    this.temp.description = personnality.description

    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

  storeDel(personnality){
    this.temp.id = personnality.id
  }


}
