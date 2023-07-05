import { Component } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent {

  menuItems = [
    {name:'tavern', path: '/game/tavern'},
    {name:'inventory', path: '/game/inventory'},
    {name:'skills', path: '/game/skills'},
    {name:'quests', path: '/game/quests'},
    {name:'arena', path: '/game/arena'},
    {name:'shop', path: '/game/shop'}
  ]

}
