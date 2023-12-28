import { Injectable } from '@angular/core';
import {HttpService} from "../http-service/http.service";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpService) { }

  addAction(body: {user_id: number, action_id: number, action_start: any , action_end: any}) {
    return this.http.post('addUserActions', body)
  }

  getActions() {
    return this.http.get('getUserActions')
  }

}
