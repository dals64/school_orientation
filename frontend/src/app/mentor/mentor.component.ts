import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  
  class_one = [];
  class_two = [];
  class_three = [];
  class_four = [];
  constructor() { }

  ngOnInit(): void {
    for (let i =0; i<10; i++){
      this.class_one.push({
        name:'mantorname1',
        skills:['maths','physiques','info'],
        contact:'65423565555'
      });
      this.class_two.push({
        name: 'mantorname2',
        skills: ['english', 'geography', 'history', 'french'],
        contact: '65423565555'
      });
      this.class_three.push({
        name: 'mantorname3',
        skills: ['finance', 'gestion', 'fiscalité'],
        contact: '65423565555'
      });
      this.class_three.push({
        name: 'mantorname3',
        skills: ['finance', 'gestion', 'fiscalité'],
        contact: '65423565555'
      });
      this.class_four.push({
        name: 'mantorname4',
        skills: ['comptabilité', 'statistiques'],
        contact: '65423565555'
      })
    }
  }

}
