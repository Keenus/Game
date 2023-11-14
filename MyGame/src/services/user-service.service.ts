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

  userStats = new BehaviorSubject({
    username : 'test',
    experience : 100,
    gold : 0,
    health : 100,
    maxHealth : 100,
    mana : 100,
    maxMana : 100,
    stamina : 100,
    maxStamina : 100,
    level: 2,
    stats: {
      strength: 1,
      agility: 1,
      intelligence: 1,
      prosperity: 50,
      health: 100,
    },
    action: {
      isBusy : false,
      busyAction : '',
      busyActionTime : 0,
      busyActionTimeLeft : 0,
      busyActionProgress : 0,
    },
  })

  //Level up


  checkIsUserLevelUp() {
    let stats = this.userStats.value;
    let nextLevel = stats.level * 1000;
    if (stats.experience >= nextLevel) {
      stats.level += 1;
      this.updateUserStats(stats);
    }
  }

  updateUserExperience(exp: number) {
    let stats = this.userStats.value;
    stats.experience += exp;
    this.updateUserStats(stats);
    this.checkIsUserLevelUp();
  }

  updateUserStats(stats: any) {
    this.userStats.next(stats);
  }

  //Action

  clearAction() {
    let stats = this.userStats.value;
    stats.action.isBusy = false;
    stats.action.busyAction = '';
    stats.action.busyActionTime = 0;
    stats.action.busyActionProgress = 0;
    stats.action.busyActionTimeLeft = 0;
    this.updateUserStats(stats);
  }

  startAction(action: string, time: number) {
    let stats = this.userStats.value;
    stats.action.isBusy = true;
    stats.action.busyAction = action;
    stats.action.busyActionTime = time;
    stats.action.busyActionProgress = 0;
    stats.action.busyActionTimeLeft = time;
    this.updateUserStats(stats);
  }

}
