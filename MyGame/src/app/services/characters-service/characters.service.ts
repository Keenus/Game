import { Injectable } from '@angular/core';
import {HttpService} from "../http-service/http.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpService) { }

  getCharacters() {
    return this.http.get('characters')
  }

}
