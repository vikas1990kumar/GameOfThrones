import { Component, OnInit, OnDestroy } from '@angular/core';

import {GameHttpService} from "../game-http.service";
import {isNgTemplate } from '../../../node_modules/@angular/compiler';

// decorator tells about the purpose of the class
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit, OnDestroy {


 public allData=[];

 public allData1=[];

 public allData2=[];

  constructor(public gameHttpService: GameHttpService) {

    

    console.log("Home component constructor is called")
   }

  

  ngOnInit() {

  

    console.log("Home component OnInit is called")
    //this.allData = this.gameHttpService.getAllData();
    //console.log(this.allData);

    this.allData = this.gameHttpService.getAllData().subscribe(
      data => {
        console.log(data);
        this.allData = data;

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )


    this.allData1 = this.gameHttpService.getAllData1().subscribe(
      data => {
        console.log(data);
        this.allData1 = data;

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    this.allData2 = this.gameHttpService.getAllData2().subscribe(
      data => {
        console.log(data);
        this.allData2 = data;

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    console.log(this.allData);
  }
  ngOnDestroy() {

    console.log("Home component destroyed")
  }

}
