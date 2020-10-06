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

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/school').subscribe(
      data => this.schools = data,
      error => console.log(error)
    )
  }

  public temp = {
    id:null,
    name: null,
    location: null,
    site: null,
    contact: null,
    outlet: null,
    outletDel:null
  }

  public formData = {
    name:null,
    location:null,
    site:null,
    contact:null,
  }

  public outlets;

  edit(){
    this.http.post('http://localhost:8000/api/school/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Modification réussie')
          this.ngOnInit()
          this.temp.outlet = null
          this.temp.outletDel = null
        } else {
          alert("erreur lors de la modification")
        }
      });
  }

  register(){
    this.http.post('http://localhost:8000/api/school/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Ajout de l\'école réussi')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      }
    )
  }

  store(school){
    this.temp.id = school.id
    this.temp.name = school.name
    this.temp.location = school.location
    this.temp.site = school.site
    this.temp.contact = school.contact
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  storeDel(school){
    this.temp.id = school.id
  }

  delete(){
    this.http.post('http://localhost:8000/api/school/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('école supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  }

}
