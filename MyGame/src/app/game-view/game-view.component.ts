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

  isUserBusy: boolean = false;
  action= {
    name: 'none',
    time: 0,
    progress: 0
   }

  loadUserAction() {
    this.UserService.userStats
      .subscribe((value) => {
        console.log(value.action)
        this.isUserBusy = value.action.isBusy
        this.action = {
          name: value.action.busyAction,
          time: value.action.busyActionTime,
          progress: value.action.busyActionProgress
        }
      });
  }

  ngOnInit() {
    this.loadUserAction();
    }

  ngOnChanges() {
    this.loadUserAction();
  }
}
