import { Component } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {

  constructor(private userService: UserServiceService) {
  }

  descToShow: any;
  stats:any
  quests:any[] = [];
  newQuests = [
    {
      name: 'Dwarf revenge',
      description: 'Dwarf Carl is looking for help to get revenge on the goblins that killed his family. He is offering a reward of 100 gold pieces.',
      requirements: {
        level: 1,
        strength: 1,
        agility: 1,
      },
      time: 1,
      reward: '100',
      exp: '100'
    },
    {
      name: 'Peoples champion',
      description: 'The people of the town are looking for help them with a orc problem. They are offering a reward of 200 gold pieces.',
      requirements: {
        level: 2,
        strength: 5,
        agility: 2,
      },
      time: 2,
      reward: '200',
      exp: '200'
    },
    {
      name: 'people kill people',
      description: 'Town is offering a reward of 200 gold pieces for kill the bandits that are terrorizing the town.',
      requirements: {
        level: 2,
        strength: 2,
        agility: 5,
      },
      time: 2,
      reward: '200',
      exp: '200'
    },
    {
      name: 'Dragon slayer',
      description: 'Farmers are offering a reward of 400 gold pieces for kill the dragon that is eating their beef cattle.',
      requirements: {
        level: 3,
        strength: 5,
        agility: 5,
      },
      time: 5,
      reward: '400',
      exp: '400'
    },
  ]


  questsToShow(){
    let userLevel = this.stats.level
    this.newQuests.forEach((quest) => {
      let questLevel = quest.requirements.level
      if(userLevel === questLevel){
        this.quests.push(quest)
      }
    })
    this.descToShow = this.quests[0].name
  }

  getUserStats(){
    this.stats = this.userService.userStats.value;
  }


  acceptQuest(quest: any) {
    this.stats.action.isBusy = true;
    this.stats.action.busyAction = quest.name;
    this.stats.action.busyActionTime = quest.time;
    this.stats.action.busyActionProgress = 100;
    this.stats.action.busyActionTimeLeft = quest.time;
    this.userService.updateUserStats(this.stats);
  }

  showDescOnMobile(item:any) {
    let a = document.getElementsByClassName(item.name);
    this.descToShow = item.name;
  }

  ngOnInit() {
    this.userService.userStats.subscribe((value) => {})
    this.getUserStats()
    this.questsToShow()
  }

  ngOnChanges() {
    this.userService.userStats.subscribe((value) => {})
    this.getUserStats()
    this.questsToShow()
  }

}

