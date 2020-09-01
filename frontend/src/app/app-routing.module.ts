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

const routes: Routes = [
  { path: "", component: AccueilComponent },
  {path:"admin", component:SignInComponent},
  {path:"home", component:AppBarComponent, children:[
    { path: "", component: ListCareersComponent, outlet: 'content' },
    {path:"schools", component:ListSchoolsComponent, outlet:'content'},
    { path: "outlets", component: OutletsComponent, outlet: 'content' },
    { path: "mentors", component: MentorComponent, outlet: 'content' },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }