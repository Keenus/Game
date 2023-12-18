import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ActionsService} from "../app/services/actions-service/actions.service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private actionsService:ActionsService) { }

  user = new BehaviorSubject(false);
  actionTime = new BehaviorSubject(0);
  action = new BehaviorSubject({
    action_id: 0,
    action_name: '',
    action_start_date: '',
    action_end_date: '',
  });

  isUserBusy = new BehaviorSubject(false);
  timeLeft = new BehaviorSubject(0);


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

  checkLastAction() {
   this.actionsService.getActions()
      .subscribe((actions) => {
        if (Array.isArray(actions)) {
           let lastAction = actions[actions.length - 1];
           this.action = lastAction
           this.checkIsUserBusy(lastAction.action_end_date);
           return this.action;
        }
        return this.action;
      });
  }

  checkIsUserBusy(lastActionEndDate: any) {
    let dateNow = new Date()
    let lastActionDate = new Date(lastActionEndDate);
    lastActionDate.setHours(lastActionDate.getHours() + 1);
    console.log(lastActionDate, dateNow)
    let timeLeft = lastActionDate.getTime() - dateNow.getTime();
    this.timeLeft.next(timeLeft/1000);
    if (lastActionDate > dateNow) {
      this.isUserBusy.next(true);
    } else {
      this.isUserBusy.next(false);
      return;
    }
  }

  ngOnInit() {
   this.checkLastAction();
  }

}
