import { Component } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {CharactersService} from "../services/characters-service/characters.service";
import {ActionsService} from "../services/actions-service/actions.service";


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent {


  constructor(
    private userService : UserServiceService,
    private charactersService: CharactersService,
    private actionsService: ActionsService
  ) { }

  isUserBusy: boolean = false;

  menuItems = [
    {name:'tavern', path: '/tavern'},
    {name:'inventory', path: '/inventory'},
    {name:'skills', path: '/skills'},
    {name:'quests', path: '/quests'},
    {name:'arena', path: '/arena'},
    {name:'shop', path: '/shop'}
  ]

  characters: any[] = [];

   checkBusy() {
    this.userService.checkLastAction();
    this.userService.isUserBusy.subscribe((data: any) => {
      this.isUserBusy = data;
    })
   }

  ngOnInit() {
    this.checkBusy();
    }

}
