import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {

  public list;

  public career;

  public school;

  constructor(private http : HttpClient, private service : PageNavigationService) { }

  ngOnInit(): void {
    this.career = this.service.getCareer()
    this.school = this.service.getSchool()
    this.http.post('http://localhost:8000/api/school/outlets/',this.service.getSchool()).subscribe(
      data => this.list = data,
      error => console.log(error)
    )
  }

}
