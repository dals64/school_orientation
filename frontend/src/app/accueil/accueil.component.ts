import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PageNavigationService } from '../Services/pageNavigation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  constructor(private http : HttpClient, private service : PageNavigationService, private router : Router) { }

  public specialities;

  speciality = {
    id:null,
    name:null
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/speciality').subscribe(
      data => this.specialities = data,
      error => console.log(error)
    );
  }

  public test(){
    this.service.storeSpeciality(this.speciality.id)
    this.router.navigate(['home', { outlets: { content: ['test'] } }])
  }

}
