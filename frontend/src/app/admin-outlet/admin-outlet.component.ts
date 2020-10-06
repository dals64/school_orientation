import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-outlet',
  templateUrl: './admin-outlet.component.html',
  styleUrls: ['./admin-outlet.component.css']
})
export class AdminOutletComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router) { }

  public outlets;
  public entreprises;
  public temp = {
    id:null,
    name:null,
    description:null,
    entreprise:null,
    entrepriseDel:null
  }

  public formData = {
    name:null,
    description:null,
    school:null
  }

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  edit(){
    this.http.post('http://localhost:8000/api/outlet/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          this.temp.entreprise = null
          this.temp.entrepriseDel = null
          alert('modification réussie')
          this.ngOnInit()
        } else {
          alert("erreur lors de la modification, veuillez reéssayer")
        }
      });
  }

  store(outlet){
    this.http.get('http://localhost:8000/api/entreprise').subscribe(
      data => this.entreprises = data,
      error => console.log(error)
    )
    this.temp.id = outlet.id
    this.temp.name= outlet.name
    this.temp.description = outlet.description
  }

  storeDel(outlet){
    this.temp.id = outlet.id
  }

  register(){
  
    this.http.post('http://localhost:8000/api/outlet/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('débouchée enregistrée')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      });
   
  }

  delete(){
    this.http.post('http://localhost:8000/api/outlet/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('débouchée supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  }

}
