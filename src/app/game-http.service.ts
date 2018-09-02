import { Injectable } from '@angular/core';

//importing http client to make the requests

import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//import observable related code

import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameHttpService {

  public currentData; 

  public allData;

  public baseUrl =  'https://www.anapioficeandfire.com/api';

  constructor(private _http:HttpClient) { 

    console.log("game http service was called");

  }

  //exception handler

  private handleError(err: HttpErrorResponse){

    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);

  }

  //method to return all the data

  public getAllData():any{

    let myResponse = this._http.get(this.baseUrl+'/houses');
    console.log(myResponse);
    return myResponse;

    
  }

  public getAllData1():any{

    let myResponse = this._http.get(this.baseUrl+'/books');
    console.log(myResponse);
    
    return myResponse;

    
  }

  public getAllData2():any{

    let myResponse = this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;

    
  }

  // method to get a particular data

  public getSingleDataInformation(houseId):any {

    let myResponse = this._http.get(this.baseUrl+'/houses'+'/'+ houseId)

    return myResponse;

  }

  public getSingleDataInformation1(characterId):any {

    let myResponse = this._http.get(this.baseUrl+'/characters'+'/'+ characterId)
 
     return myResponse;
 
   }

   public getSingleDataInformation2(bookId):any {

    let myResponse = this._http.get(this.baseUrl+'/books'+'/'+ bookId)
 
     return myResponse;
 
   }

  
}
