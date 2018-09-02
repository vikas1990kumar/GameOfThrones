import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//router module used for setting up the application level route
import {RouterModule, Routes} from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

//imports statement for service

import { GameHttpService } from './game-http.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //routerModule forRoot method to declare the possible routes in application

    RouterModule.forRoot([
      {path:'home',component :HomeComponent},
      {path:'', redirectTo:'home',pathMatch: 'full'},
      //{path:'data/:url', component:DetailComponent},
      
      { path: 'books/:bookId', component: DetailComponent},
      { path: 'characters/:characterId', component: DetailComponent},
      { path: 'houses/:houseId', component: DetailComponent},
      {path:'**',component:NotFoundComponent}

      

    ])



  ],
  providers: [GameHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
