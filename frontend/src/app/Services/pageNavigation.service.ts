import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
    providedIn: 'root',
})
export class PageNavigationService {

    constructor(private http : HttpClient){}

    school = {
        id: null,
        name:null
    }

    career = {
        id:null,
        name: null
    }

    public admin;

    speciality  = {
        id:null,
        name:null
    }

    storeSpeciality(id){
        this.speciality.id = id;
    }

    storeCareer(id, name){
        this.career.id = id
        this.career.name = name
    }

    storeSchool(id, name) {
        this.school.id = id
        this.school.name = name
        console.log(this.school)
    }

    getSpeciality(){
        return this.speciality
    }

    getCareer(){
        return this.career
    }

    getSchool(){
        return this.school
    }

    setAdmin(admin){
        this.admin = admin
    }

    getAdmin(){
        return this.admin
    }

}