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
        strength: 7,
        agility: 6,
        intelligence: 5,
        prosperity: 50,
        health: 100,
        level: 1,
      }
    },
    {
      name: 'Thief',
      img: 'thief.png',
      selected: false,
      details: 'Thief is a character that is agile and inteligent. He is a fast learner and can be very strong in the future.',
      stats: {
        strength: 7,
        agility: 15,
        intelligence: 10,
        prosperity: 60,
        health: 100,
        level: 3,
      }
    },
    { name: 'Dwarf',
      img: 'dwarf.png',
      selected: false,
      details: 'Dwarf is a character that is very strong but he is not very agile. His strength is his biggest advantage.',
      stats: {
        level: 1,
        agility: 3,
        strength: 10,
        health: 100,
        intelligence: 5,
        prosperity: 50,
      }
    },
    { name: 'Elf',
      img: 'elf-woj.png',
      selected: false,
      details: 'Elf is a inteligent and agile character. He is not very strong but he is very fast and can be very strong in the future.',
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
