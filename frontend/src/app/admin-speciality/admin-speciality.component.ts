import { Component, OnInit, EventEmitter, Testability } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-speciality',
  templateUrl: './admin-speciality.component.html',
  styleUrls: ['./admin-speciality.component.css']
})
export class AdminSpecialityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public temp = {
    id: null,
    name: null,
    career: null,
    careerDel: null
  }; 

  public test;
  
  public careers;

  public formData = {
    name: null,
    career: null
  }

  p: number = 1;
  public specialities;

  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/speciality').subscribe(
      data => this.specialities = data,
      error => console.log(error)
    );
    
  }

  edit(){
    
    this.http.post('http://localhost:8000/api/speciality/update/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Modification réussie')
          this.ngOnInit()
          this.temp.career = null
          this.temp.careerDel = null
        } else {
          alert("erreur lors de la modification")
        }
      });


  }


  register(){

    this.http.post('http://localhost:8000/api/speciality/register/', this.formData).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('Ajout de la spécialité réussi')
          this.ngOnInit()
        } else {
          alert("erreur lors de l'ajout, veuillez reéssayer")
        }
      }
    )

  }

  delete(){
  
    this.http.post('http://localhost:8000/api/speciality/delete/', this.temp).subscribe(
      data => console.log(data),
      error => {
        console.log(error.error.text)
        if (error.error.text === "success") {
          alert('spécialité supprimée')
          this.ngOnInit()
        } else {
          alert("erreur lors de la suppression, veuillez reéssayer")
        }
      });

  }

  storeDel(speciality){
    this.temp.id = speciality.id;
  }

  store(speciality){
    this.temp.name = speciality.name
    this.temp.id = speciality.id
    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

}
