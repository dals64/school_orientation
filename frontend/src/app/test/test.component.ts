import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageNavigationService } from '../Services/pageNavigation.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  /*var checks = document.querySelectorAll(".check");
  var max = 2;
  for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
  function selectiveCheck(event) {
    var checkedChecks = document.querySelectorAll(".check:checked");
    if (checkedChecks.length >= max + 1)
      return false;
  }*/

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

  selectiveCheck(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check1:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck2(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check2:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck3(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check3:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck4(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check4:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck5(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check5:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck6(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check6:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck7(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check7:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck8(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check8:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck9(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check9:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck10(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check10:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck11(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check11:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck12(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check12:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck13(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check13:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck14(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check14:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck15(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check15:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }

  selectiveCheck16(event) {
    let max = 2;
    let checkedChecks = document.querySelectorAll(".check16:checked")
    if (checkedChecks.length >= max + 1) {
      return false
    }
  }





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
