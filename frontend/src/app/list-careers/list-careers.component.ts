import { Component, OnInit } from '@angular/core';
import { PageNavigationService } from '../Services/pageNavigation.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-list-careers',
  templateUrl: './list-careers.component.html',
  styleUrls: ['./list-careers.component.css']
})
export class ListCareersComponent implements OnInit {

  constructor(private service : PageNavigationService, private router: Router, private http : HttpClient) { }

  public speciality;

  public list;

  public nameSpec;

  ngOnInit(): void {
    this.speciality = this.service.getSpeciality();
    
    this.http.post('http://localhost:8000/api/speciality/careers/', this.service.getSpeciality()).subscribe(
      data => this.list = data,
      error => console.log(error)
    );
  }

  redirect(id, name){
    this.service.storeCareer(id, name)
    this.router.navigate(['home', { outlets: { content: ['careerDetail',{outlets:{career:['schools']}}] } }]);
  }

}
