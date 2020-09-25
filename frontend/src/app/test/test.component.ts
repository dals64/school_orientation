import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service : PageNavigationService, private router: Router) { }

  public reflechi:string[] = new Array(16);
  
  public concepteur: string[] = new Array(16);

  public joueur_de_mots: string[] = new Array(16);

  public communicatif: string[] = new Array(16);

  public corporel: string[] = new Array(16);

  public rationnel: string[] = new Array(16);

  public musicien: string[] = new Array(16);

  public results: string[] = new Array(2);

  public count = [
    {'personnality':'reflechi', 'count':0},
    { 'personnality': 'concepteur', 'count': 0 },
    { 'personnality': 'joueur_de_mots', 'count': 0 },
    { 'personnality': 'communicatif', 'count': 0 },
    { 'personnality': 'corporel', 'count': 0 },
    { 'personnality': 'rationnel', 'count': 0 },
    { 'personnality': 'musicien', 'count': 0 },
  ]

  ngOnInit(): void {
    this.results[0] = null
    this.results[1] = null
    for (let index = 0; index < 16; index++) {
      this.reflechi[index] = null;
      this.concepteur[index] = null;
      this.joueur_de_mots[index] = null;
      this.communicatif[index] = null;
      this.corporel[index] = null;
      this.rationnel[index] = null;
      this.musicien[index] = null;
    }

  }

  onSubmit(){

    let first = {'personnality':'','count':0};
    let second = { 'personnality': '','count': 0};
    let temp;

    for (let index = 0; index < 16; index++) {
      if (this.reflechi[index] !== null) {
        this.count[0]['count']++
      }
      if (this.concepteur[index] !== null) {
        this.count[1]['count']++
      }
      if (this.joueur_de_mots[index] !== null) {
        this.count[2]['count']++
      }
      if (this.communicatif[index] !== null) {
        this.count[3]['count']++
      }
      if (this.corporel[index] !== null) {
        this.count[4]['count']++
      }
      if (this.rationnel[index] !== null) {
        this.count[5]['count']++
      }
      if (this.musicien[index] !== null) {
        this.count[6]['count']++
      }  
    }

    for (let index = 0; index < this.count.length; index++) {
      if (this.count[index]['count'] > first['count']) {
        first = this.count[index]
        temp = index
      }
    }

    this.count[temp]['count'] = 0;

    for (let index = 0; index < this.count.length; index++) {
      if (this.count[index]['count'] > second['count']) {
        second = this.count[index]
      }
    }

    if (first['count']-second['count']>2) {
      this.results[0] = first['personnality']
    } else {
      this.results[0] = first['personnality']
      this.results[1] = second['personnality']
    }

    console.log(this.results)

    this.service.storePersonnalities(this.results)
    this.router.navigate(['home', { outlets: { content: ['careers'] } }])

  }

}
