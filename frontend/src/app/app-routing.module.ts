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
  {path:"/admin", component: SignInComponent, outlet:'principal'},
  {path:"", component: AccueilComponent, outlet:'principal'},
  {path:"/home", component: AppBarComponent, outlet:'principal', children:[
    {path: "schools", component: ListSchoolsComponent, outlet:'application'},
    {path:"", component: ListCareersComponent, outlet:'application'},
    {path:"outlets", component:OutletsComponent, outlet:'application'},
    {path:"mentors", component:MentorComponent, outlet:'application'},
    {path:"books", component:BooksComponent, outlet:'application'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }