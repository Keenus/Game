import { Component } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent {

  constructor(private UserService : UserServiceService) { }

  menuItems = [
    {name:'tavern', path: '/game/tavern'},
    {name:'inventory', path: '/game/inventory'},
    {name:'skills', path: '/game/skills'},
    {name:'quests', path: '/game/quests'},
    {name:'arena', path: '/game/arena'},
    {name:'shop', path: '/game/shop'}
  ]

  isUserBusy = false;
  actionTime: number | undefined;
  action = '';

  ngOnInit() {
    this.UserService.user
      .subscribe((value) => {
        this.isUserBusy = value;
      });
    this.UserService.actionTime.subscribe((value) => {
      console.log(value, 'actionTime')
      this.actionTime = value;
    })
    this.UserService.action.subscribe((value) => {
      console.log(value, 'action')
      this.action = value;
    })
    }

  ngOnChanges() {
    this.UserService.actionTime.subscribe((value) => {
      console.log(value, 'actionTime')
      this.actionTime = value;
    })
    this.UserService.action.subscribe((value) => {
      console.log(value, 'action')
      this.action = value;
    })
  }
}
