import { Component } from '@angular/core';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {

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
      time:'30',
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
      time:'60',
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
      time:'60',
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
      time:'time',
      reward: 'reward4',
      exp: '400'
    },
  ]


  acceptQuest(quest: any) {
    console.log(quest)
  }

  showDescOnMobile(item:any) {
    let a = document.getElementsByClassName(item.name);
    this.descToShow = item.name;
    console.log(a)
  }
}
