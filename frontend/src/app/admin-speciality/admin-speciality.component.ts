import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-speciality',
  templateUrl: './admin-speciality.component.html',
  styleUrls: ['./admin-speciality.component.css']
})
export class AdminSpecialityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formData = {
    name:null,
    career:null
  }


  edit(){
    alert('editer')
  }

  register(){
    axios.get('http://localhost:8000/speciality/register/').then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

}
