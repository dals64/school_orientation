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

  public temp ={
    id:null,
    name: null,
    contact: null,
    email: null
  }

  public formData = {
    name:null,
    contact:null,
    email:null
  }

  p: number = 1;

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/mentor').subscribe(
      data => this.mentors = data,
      error => console.log(error)
    )
  }

  edit(){
    this.http.post('http://localhost:8000/api/mentor/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('modification réussie')
          this.ngOnInit()
        } else {
          alert("erreur lors de la modification")
        }
      });
  }

  store(mentor){
    this.temp.id = mentor.id
    this.temp.name = mentor.name
    this.temp.email = mentor.email
    this.temp.contact = mentor.contact
  }

  storeDel(mentor){
    this.temp.id = mentor.id
  }

  register(){
    this.http.post('http://localhost:8000/api/mentor/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('mentor ajouté')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      });
  }
  
  delete(){
    this.http.post('http://localhost:8000/api/mentor/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('mentor supprimé')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });
  }

}
