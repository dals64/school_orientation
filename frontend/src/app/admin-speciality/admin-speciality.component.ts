import { Component, OnInit } from '@angular/core';

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
      console.log('ajouter')
  }

}
