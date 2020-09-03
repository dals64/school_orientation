import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-school',
  templateUrl: './admin-school.component.html',
  styleUrls: ['./admin-school.component.css']
})
export class AdminSchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formData = {
    name:null,
    location:null,
    site:null,
    contact:null,
    outlet:null
  }

  edit(){

  }

  register(){

  }

}
