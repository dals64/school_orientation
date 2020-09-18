import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCareersComponent } from './list-careers/list-careers.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { OutletsComponent } from './outlets/outlets.component';
import { AppComponent } from './app.component';
import { MentorComponent } from './mentor/mentor.component';
import { BooksComponent } from './books/books.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminSpecialityComponent } from './admin-speciality/admin-speciality.component';
import { AdminCareerComponent } from './admin-career/admin-career.component';
import { AdminSchoolComponent } from './admin-school/admin-school.component';
import { AdminMentorComponent } from './admin-mentor/admin-mentor.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminOutletComponent } from './admin-outlet/admin-outlet.component';
import { SchoolMentorComponent } from './school-mentor/school-mentor.component';
import { AdminAdministratorComponent } from './admin-administrator/admin-administrator.component';
import { AfterSignin } from './Services/after-signin.service';
import {CanActivate} from '@angular/router';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { AdminPersonnalityComponent } from './admin-personnality/admin-personnality.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path:"admin", component:SignInComponent},
  {path: "admin/home", component: AdministrationComponent, canActivate: [AfterSignin], children:[
    {path:"", component:AdminSpecialityComponent, outlet:'admin'},
    {path: "speciality", component: AdminSpecialityComponent, outlet: 'admin'},
    {path:"careers", component:AdminCareerComponent, outlet:'admin'},
    {path:"schools", component:AdminSchoolComponent, outlet:'admin'},
    {path:"mentors", component:AdminMentorComponent, outlet:'admin'},
    {path:"books", component:AdminBookComponent, outlet:'admin'},
    {path:"outlets", component:AdminOutletComponent, outlet:'admin'},
    {path:"personnalities", component: AdminPersonnalityComponent, outlet: 'admin'},
    {path:"administrators", component: AdminAdministratorComponent, outlet:'admin'}
  ]},
  {path:"home", component:AppBarComponent, children:[
    {path:"", component: AccueilComponent, outlet:'content'},
    { path: "careers", component: ListCareersComponent, outlet: 'content' },
    { path: "careerDetail", component: SchoolMentorComponent, outlet:'content', children:[
      {path:"schools", component:ListSchoolsComponent, outlet:'career'},
      { path: "mentors", component: MentorComponent, outlet: 'career' }
    ]},
    { path: "outlets", component: OutletsComponent, outlet: 'content' },
    { path: "books", component: BooksComponent, outlet: 'content' },
  ]},


  {path:'**', component:FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }