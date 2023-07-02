import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuImage = 'assets/images/home.png';

  menuItems = [
    {
      name: 'Game',
      path: 'game'
    },
    {
      name: 'Character',
      path: 'character'
    },
    {
      name: 'Quests',
      path: 'quests'
    },
  ];

}
