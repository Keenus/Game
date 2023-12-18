import { Component } from '@angular/core';
import {ActionsService} from "../../services/actions-service/actions.service";
import {UserServiceService} from "../../../services/user-service.service";

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {

  constructor(
    private actionsService: ActionsService,
    private userService: UserServiceService
    ) { }

  choosenEnemy: any;
  opponentList = [
    {
      name: 'knight',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        level: 1,
      },
      health: 100,
      reward: 10,
      exp: 50,
      image: 'assets/images/goblin.png'
    },
    {
      name: 'Orc',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        level: 1,
      },
      health: 100,
      maxHp: 150,
      reward: 15,
      image: 'assets/images/orc.png'
    },
    {
      name: 'Troll',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        level: 1,
      },
      health: 100,
      maxHp: 200,
      reward: 20,
      image: 'assets/images/troll.png'
    },
    {
      name: 'Giant',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        level: 1,
      },
      health: 100,
      maxHp: 250,
      reward: 25,
      image: 'assets/images/giant.png'
    },
    {
      name: 'Dragon',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        level: 1,
      },
      health: 100,
      maxHp: 300,
      reward: 30,
      image: 'assets/images/dragon.png'
      }
  ]

  getHighestStat(enemy:any) {
    let highestStat = 0;
    let highestStatName = '';
    Object.keys(enemy.stats).forEach((stat:any) => {
      if (enemy.stats[stat] > highestStat) {
        highestStat = enemy.stats[stat];
        highestStatName = stat;
      }
    })
    console.log(highestStatName,':',highestStat)
    return highestStatName && highestStat;
  }


  getOpponentStats(enemy:any) {
    let level = enemy.stats.level;
    let stats = 0;
    function keyValue(obj:any) {
        return Object.keys(obj).map((key) => obj[key]);
    }

     keyValue(enemy.stats).forEach((stat:any) => {
        stats += stat * level;
     })
  }

  startFight(enemy: any) {
    let startDate = new Date();
    let endDate = new Date();
    endDate = new Date(endDate.setMinutes(endDate.getMinutes() + 1));
    this.choosenEnemy = enemy;
    this.actionsService.addAction({
      name: 'start fight with: ' + this.choosenEnemy.name,
      startDate: startDate,
      endDate: endDate
    }).subscribe(() => {
      this.userService.checkLastAction();
    });
  }
}
