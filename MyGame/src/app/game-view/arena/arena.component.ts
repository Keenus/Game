import { Component } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {
  choosenEnemy: any;
  enemyList = [
    {
      name: 'Goblin',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      },
      maxHp: 100,
      gold: 10,
      image: 'assets/images/goblin.png'
    },
    {
      name: 'Orc',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      },
      maxHp: 150,
      gold: 15,
      image: 'assets/images/orc.png'
    },
    {
      name: 'Troll',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      },
      maxHp: 200,
      gold: 20,
      image: 'assets/images/troll.png'
    },
    {
      name: 'Giant',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      },
      maxHp: 250,
      gold: 25,
      image: 'assets/images/giant.png'
    },
  ]

  NgOnInit() {
    console.log(this.enemyList);
  }
}
