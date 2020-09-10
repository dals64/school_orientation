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
import { AdminCareerComponent } from './admin-career/admin-career.component';
import { AdminSchoolComponent } from './admin-school/admin-school.component';
import { AdminOutletComponent } from './admin-outlet/admin-outlet.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminMentorComponent } from './admin-mentor/admin-mentor.component';
import { AdminSpecialityComponent } from './admin-speciality/admin-speciality.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SpecialityService} from './Services/speciality.service';
import {MentorService} from './Services/mentor.service';
import {PageNavigationService} from './Services/pageNavigation.service';
import { SchoolMentorComponent } from './school-mentor/school-mentor.component';
import { AdminAdministratorComponent } from './admin-administrator/admin-administrator.component';

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
    BooksComponent,
    AdminCareerComponent,
    AdminSchoolComponent,
    AdminOutletComponent,
    AdminBookComponent,
    AdminMentorComponent,
    AdminSpecialityComponent,
    SchoolMentorComponent,
    AdminAdministratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    SpecialityService,
    MentorService,
    PageNavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
