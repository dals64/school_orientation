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

  public schools;

  public mentors;

  public outlets;

  public temp = {
    id:null,
    name:null,
    description:null,
    school:null,
    schoolDel:null,
    mentor:null,
    mentorDel:null,
    outlet:null,
    outletDel:null
  }

  public formData = {
    name:null,
    description:null,
  }

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

  edit(){
    
    this.http.post('http://localhost:8000/api/career/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Modification réussie')
          this.ngOnInit()
          this.temp.school = null
          this.temp.schoolDel = null
          this.temp.outlet = null
          this.temp.outletDel = null
          this.temp.mentor = null
          this.temp.mentorDel = null
        } else {
          alert("erreur lors de la modification")
        }
      });
  }

  store(career){
    this.temp.name = career.name
    this.temp.id = career.id
    this.temp.description = career.description
    this.http.get('http://localhost:8000/api/school').subscribe(
      data => this.schools = data,
      error => console.log(error)
    )
    this.http.get('http://localhost:8000/api/mentor').subscribe(
      data => this.mentors = data,
      error => console.log(error)
    )
    this.http.get('http://localhost:8000/api/outlet').subscribe(
      data => this.outlets = data,
      error => console.log(error)
    )
  }

  storeDel(career) {
    this.temp.id = career.id;
  }

  register(){
    
    this.http.post('http://localhost:8000/api/career/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Ajout de la carrière réussi')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      });
  }

  delete(){
    this.http.post('http://localhost:8000/api/career/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('carrière supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  }
}
