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
    school:null,
    outlet:null
  }

  public pageOfItems: Array<any>;

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/career').subscribe(
      data => this.careers = data,
      error => console.log(error)
    )
  }

  edit(){
    axios.post('http://localhost:8000/api/career/update/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('Modification de la carrière réussi')
      } else {
        alert("erreur lors de la modification, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
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

  delete(){
    axios.post('http://localhost:8000/api/career/delete/', this.temp).then(function (response) {
      if (response.data = 'success') {
        alert('carrière supprimée')
      } else {
        alert("erreur lors de la suppression, veuillez reéssayer")
      }
    }).catch(function (error) {
      console.log(error);
      alert("erreur lors de connexion au serveur, veuillez reéssayer")
    });
  }
}
