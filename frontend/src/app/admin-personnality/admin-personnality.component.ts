import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-personnality',
  templateUrl: './admin-personnality.component.html',
  styleUrls: ['./admin-personnality.component.css']
})
export class AdminPersonnalityComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

  register(){

  }

  delete(){

  }

  edit(){

  }

  store(career){

  }

  storeDel(career){

  }


}
