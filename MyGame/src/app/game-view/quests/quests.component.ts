import { Component } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {

  constructor(private UserService : UserServiceService) { }

  descToShow: any;

  newQuests = [
    {
      name:'Dwarf revenge',
      description: 'Dwarf Carl is looking for help to get revenge on the goblins that killed his family. He is offering a reward of 100 gold pieces.',
      requirements: {
        level: 1,
        strength: 1,
        agility: 1,
      },
      time:1,
      reward: '100',
      exp: '100'
    },
    {
      name:'Peoples champion',
      description: 'The people of the town are looking for help them with a orc problem. They are offering a reward of 200 gold pieces.',
      requirements: {
        level: 2,
        strength: 5,
        agility: 2,
      },
      time:2,
      reward: '200',
      exp: '200'
    },
    {
      name:'people kill people',
      description: 'Town is offering a reward of 200 gold pieces for kill the bandits that are terrorizing the town.',
      requirements: {
        level: 2,
        strength: 2,
        agility: 5,
      },
      time:2,
      reward: '200',
      exp: '200'
    },
    {
      name:'Dragon slayer',
      description: 'Farmers are offering a reward of 400 gold pieces for kill the dragon that is eating their beef cattle.',
      requirements: {
        level: 3,
        strength: 5,
        agility: 5,
      },
      time:5,
      reward: '400',
      exp: '400'
    },
  ]


  acceptQuest(quest: any) {
    console.log(quest)
    this.makeUserBusy(quest.time);
    this.UserService.action.next(quest.name);
  }

  makeUserBusy(time: number) {
    this.UserService.actionTime.next(time);
    this.UserService.user.next(true);
    setTimeout(() => {
      this.UserService.user.next(false);
    }
    , time * 60000)
  }

  showDescOnMobile(item:any) {
    let a = document.getElementsByClassName(item.name);
    this.descToShow = item.name;
    console.log(a)
  }

  ngOnInit() {
    this.UserService.user.subscribe((value) => {})
  }

}

