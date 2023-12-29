import {Component, Output} from '@angular/core';
import {CharactersService} from "../services/characters-service/characters.service";

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {

  @Output() hero: any;

  heroes: any[] = [];

  constructor(
    private charactersService: CharactersService
  ) {
    this.charactersService.getCharacters()
      .subscribe(data => {
        if(Array.isArray(data))
          this.heroes = data
        console.log(this.heroes)
      })
  }


  HeroChoose: any;

  chooseHero(hero: any) {

    this.HeroChoose = hero;
    this.heroes.forEach((hero: any) => {
      hero.selected = false;
    });
    hero.selected = true;
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
