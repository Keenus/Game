import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {

  @Output() hero: any;


  heroes = [
    { name: 'Knight',
      img: 'woj.png',
      selected: true,
      details: 'Knight is a character that is very strong and has a lot of health points. He is a good choice for beginners.',
      stats: {
        strength: 10,
        agility: 5,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      }
    },
    {
      name: 'Archer',
      img: 'archer.png',
      selected: false,
      details: 'Archer is a character that is very fast and has a lot of health points. He is a good choice for beginners.',
      stats: {
        strength: 3,
        agility: 10,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      }
    },
    { name: 'Wizard',
      img: 'mag.png',
      selected: false,
      details: 'Wizard is a character that is very strong and has a lot of health points. He is a good choice for beginners.',
      stats: {
        level: 1,
        agility: 5,
        strength: 3,

        health: 100,
        intelligence: 10,
        prosperity: 50,
      }
    },
    { name: 'Elf',
      img: 'elf-woj.png',
      selected: false,
      details: 'Elf is a character that is very strong and has a lot of health points. He is a good choice for beginners.',
      stats: {
        strength: 4,
        agility: 8,
        intelligence: 8,
        prosperity: 75,
        health: 100,
        level: 1,
      }
    },
  ];

  HeroChoose = this.heroes[1];

  chooseHero(hero: any) {

    this.HeroChoose = hero;
    this.heroes.forEach((hero: any) => {
      hero.selected = false;
    });
    hero.selected = true;
    console.log(this.HeroChoose)
  }


  onSelected($event: any) {

  }

  scrollSnap() {
    const scrollSnap = document.querySelector('.scroll-snap');
    if (scrollSnap) {
      scrollSnap.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
    }

  }

}
