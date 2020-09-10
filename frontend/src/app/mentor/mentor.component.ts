import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  /*customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }*/

  
  constructor(private http: HttpClient, private router: Router, private service: PageNavigationService) { }

  public list;

  ngOnInit(): void {
    this.http.post('http://localhost:8000/api/career/mentors/', this.service.getCareer()).subscribe(
      data => this.list = data,
      error => console.log(error)
    )
  }

}
