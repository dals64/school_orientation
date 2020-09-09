import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
    providedIn: 'root',
})
export class PageNavigationService {

    constructor(private http : HttpClient){}

    career = {
        id:null
    }

    speciality  = {
        id:null,
    }

    storeSpeciality(id){
        this.speciality.id = id;
    }

    storeCareer(id){
        this.career.id = id
    }

    getSpeciality(){
        return this.speciality
    }

    getSchools(id){

    }

    getMentors(id){

    }
}