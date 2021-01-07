import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerFromService {
url = "http://localhost:8080/addCustomerQuery"
  constructor(private http:HttpClient) { }

  addCustomerQuery(req : any){
    return this.http.post(this.url,req);
    
  }
}
