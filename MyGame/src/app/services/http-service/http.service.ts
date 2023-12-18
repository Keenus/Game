import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = 'http://localhost:3005/'

  constructor(private http: HttpClient) { }

  get(path: any){
    return this.http.get(this.baseUrl + path);
  }

  post(path: any, body: any){
    return this.http.post(this.baseUrl + path, body);
  }
}
