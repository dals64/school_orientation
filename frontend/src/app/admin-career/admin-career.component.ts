import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-career',
  templateUrl: './admin-career.component.html',
  styleUrls: ['./admin-career.component.css']
})
export class AdminCareerComponent implements OnInit {

  constructor() { }

  public formData = {
    name:null,
    description:null,
    school:null
  }

  ngOnInit(): void {
  }

  edit(){

  }

  register(){
    
  }
}
