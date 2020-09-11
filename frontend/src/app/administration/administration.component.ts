import { Component, OnInit } from '@angular/core';
import { PageNavigationService } from '../Services/pageNavigation.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(private service : PageNavigationService, private router : Router, private Auth : AuthService, private Token : TokenService) { }

  public name;

  ngOnInit(): void {
    this.name = this.service.getAdmin();
  }

  logout(Event: MouseEvent){
    event.preventDefault();
    this.Token.remove()
    this.Auth.changeAuthStatus(false)
    this.router.navigate(['/admin'])
  }

}
