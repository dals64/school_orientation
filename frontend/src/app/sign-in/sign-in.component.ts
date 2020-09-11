import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../Services/token.service';
import {Router} from '@angular/router';
import { PageNavigationService } from '../Services/pageNavigation.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private http : HttpClient, private Token : TokenService, private router:Router, 
    private service : PageNavigationService, private Auth : AuthService) { }

  public form = {
    email:null,
    password:null
  }


  public error = null;

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post('http://localhost:8000/api/login',this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleResponse(data){
    this.Auth.changeAuthStatus(true)
    this.Token.handle(data.access_token);
    this.service.setAdmin(data.user);
    console.log('Connexion réussie');
    this.router.navigateByUrl('admin/home');
  }

}
