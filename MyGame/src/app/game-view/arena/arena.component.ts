import { Component } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {
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

  NgOnInit() {
    console.log(this.opponentList);
  }

  startFight(enemy:any) {
    this.choosenEnemy = enemy
    console.log('start fight with: ' + this.choosenEnemy);
  }
}
