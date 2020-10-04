import { Component, OnInit } from '@angular/core';
import { PageNavigationService } from '../Services/pageNavigation.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { iif } from 'rxjs';

@Component({
  selector: 'app-list-careers',
  templateUrl: './list-careers.component.html',
  styleUrls: ['./list-careers.component.css']
})
export class ListCareersComponent implements OnInit {

  constructor(private service : PageNavigationService, private router: Router, private http : HttpClient) { }

  public speciality;

  public personnalities;

  public list;

  public nameSpec;

  public temp;

  public items = [];

  loading = false;
  load1 = true;

  ngOnInit(): void {
    this.speciality = this.service.getSpeciality();
    this.personnalities = this.service.getPersonnalities();
    let data = { 
      speciality: this.speciality.id,
      perso1: this.personnalities[0],
      perso2: this.personnalities[1]
    }
    
    this.http.post('http://localhost:8000/api/career/filter/', data).subscribe(
      data => {
        this.list = data
        this.load1 = false
      },
      error => console.log(error)
    );

    this.http.post('http://localhost:8000/api/personnality/index/', {perso1: this.personnalities[0],perso2: this.personnalities[1]}).subscribe(
      data => {
        this.temp = data;
        this.temp.forEach(element => {
          if (element !== null) {
            if (element.name === 'joueur_de_mots') {
              element.name = 'Joueur de mots'
            } if (element.name === 'communicatif') {
              element.name = 'Communicatif'
            } if (element.name === 'corporel') {
              element.name = 'Corporel'
            } if (element.name === 'Concepteur') {
              element.name = 'Concepteur'
            } if (element.name === 'musicien') {
              element.name = 'Musicien'
            } if (element.name === 'reflechi') {
              element.name = 'Réfléchi'
            } if (element.name === 'rationnel') {
              element.name = 'Rationnel'
            }

            this.items.push(element)
          }
        });
        console.log(this.items)
      }, 
      error => console.log(error)
    )
  }

  redirect(id, name){
    this.service.storeCareer(id, name)
    this.router.navigate(['home', { outlets: { content: ['careerDetail',{outlets:{career:['schools']}}] } }]);
  }

}
