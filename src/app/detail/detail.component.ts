import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code

import { ActivatedRoute, Router } from "@angular/router";

import {GameHttpService} from "../game-http.service";



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  

  //empty object

  public currentData;

  public currentData1;

  public currentData2;

  constructor(private _route: ActivatedRoute, private router: Router, public gameHttpService:GameHttpService ) { 

    console.log("Detail component is called");
  }

  ngOnInit() {

    console.log("Detail component OnInit is called");

    //getting name from the route
    let houseId = this._route.snapshot.paramMap.get('houseId');
    console.log(houseId);
    this.gameHttpService.getSingleDataInformation(houseId).subscribe(

        data => {
          console.log(data);
          this.currentData = data;
  
        },
        error=>{
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )

      let characterId = this._route.snapshot.paramMap.get("characterId");
    console.log(characterId);
    this.gameHttpService.getSingleDataInformation1(characterId).subscribe(

        data => {
          console.log(data);
          this.currentData1 = data;
  
        },
        error=>{
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )

      let bookId = this._route.snapshot.paramMap.get("bookId");
    console.log(bookId);
    this.gameHttpService.getSingleDataInformation2(bookId).subscribe(

        data => {
          console.log(data);
          this.currentData2 = data;
  
        },
        error=>{
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )
    
    console.log(this.currentData);
    console.log(this.currentData1);
    console.log(this.currentData2); 
    
  }

  ngOnDestroy(){

    console.log("Detail component is destroyed");

  }
 

  

}
