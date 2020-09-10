import { Component, OnInit } from '@angular/core';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-school-mentor',
  templateUrl: './school-mentor.component.html',
  styleUrls: ['./school-mentor.component.css']
})
export class SchoolMentorComponent implements OnInit {

  constructor(private service : PageNavigationService) { }

  public career;

  ngOnInit(): void {
    this.career = this.service.getCareer();
  }

}
