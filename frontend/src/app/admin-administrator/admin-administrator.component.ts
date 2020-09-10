import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-administrator',
  templateUrl: './admin-administrator.component.html',
  styleUrls: ['./admin-administrator.component.css']
})
export class AdminAdministratorComponent implements OnInit {

  constructor() { }

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
