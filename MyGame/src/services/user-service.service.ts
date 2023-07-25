import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  user = new BehaviorSubject(false);
  actionTime = new BehaviorSubject(0);
  action = new BehaviorSubject('');

}
