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
      },
      health: 100,
      maxHp: 300,
      reward: 30,
      image: 'assets/images/dragon.png'
      }
  ]

  startFight(enemy: any) {
    let startDate = new Date();
    let endDate = new Date();
    endDate = new Date(endDate.setMinutes(endDate.getMinutes() + 1));
    this.choosenEnemy = enemy;
    this.actionsService.addAction({
      user_id: 1,
      action_id: 1,
      action_start: startDate,
      action_end: endDate
    }).subscribe(() => {
      this.userService.checkLastAction();
    },
      error => {
        console.log('error')
        console.log(error)
    });
  }
}
