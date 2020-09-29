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

  loading = false;
  load1 = true;

  constructor(private http : HttpClient, private service : PageNavigationService) { }

  ngOnInit(): void {
    this.career = this.service.getCareer()
    this.school = this.service.getSchool()
    let postData = { 
      school: this.service.getSchool().id,
      career: this.service.getCareer().id
    }
    this.http.post('http://localhost:8000/api/outlet/getList/', postData).subscribe(
      data => {
        this.list = data
        this.load1 = false
      },
      error => console.log(error)
    )
  }

}
