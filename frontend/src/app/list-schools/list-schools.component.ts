import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.css']
})
export class ListSchoolsComponent implements OnInit {

  public list;
  loading = false;
  load1 = true;

  constructor( private http : HttpClient, private router : Router, private service : PageNavigationService) { }

  ngOnInit(): void {
    this.http.post('http://localhost:8000/api/career/schools/', this.service.getCareer()).subscribe(
      data => {
        this.list = data
        this.load1 = false
      },
      error => console.log(error)
    )
  }

  storeSchool(id, name){
    this.service.storeSchool(id, name)
    this.router.navigate(['home', { outlets: { content: ['outlets'] } }])
  }

}
