import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCareersComponent } from './list-careers/list-careers.component';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdministrationComponent } from './administration/administration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OutletsComponent } from './outlets/outlets.component';
import { BooksComponent } from './books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    AccueilComponent,
    ListCareersComponent,
    ListSchoolsComponent,
    MentorComponent,
    AdministrationComponent,
    SignInComponent,
    OutletsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
