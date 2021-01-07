import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminQueryListService {
  url = "http://localhost:8080/getCustomerQuery"
  constructor(private http:HttpClient) { }
  getCustomerQuery(req : any){
    return this.http.post(this.url,req);
  }
}
