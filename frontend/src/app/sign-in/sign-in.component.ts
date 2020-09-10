import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public form = {
    email:null,
    password:null
  }

  public error = null;

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post('http://localhost:8000/api/login',this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  public handleError(error){
    this.error = error.error.error;
  }

}
