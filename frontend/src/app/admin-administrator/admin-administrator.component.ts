import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-administrator',
  templateUrl: './admin-administrator.component.html',
  styleUrls: ['./admin-administrator.component.css']
})
export class AdminAdministratorComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public error;

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.password === this.form.password_confirmation){
      this.http.post('http://localhost:8000/api/signup/', this.form).subscribe(
        data => alert('Administrateur créé'),
        error => this.handleError(error)
      )
    }else{
      this.error = "erreur lors de l'ajout. Vérifiez l'email et le mot de passe"
    }
  }

  public handleError(error) {
    console.log(error)
    if (error.error['text'] === "success"){
      alert('Administrateur créé')
    }else{
      this.error = "erreur lors de l'ajout. Vérifiez l'email et le mot de passe"
    }
    
  }

}
