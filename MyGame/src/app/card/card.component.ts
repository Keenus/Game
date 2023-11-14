import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() heroName: any;
  @Input() img:string = '';
  @Input() heroDetails: any;
  @Input() selected: boolean = false;
  @Input() stats : any;
  @Input() type: string = 'card';

  statistics:any  = {
    strength: 0,
    agility: 0,
    intelligence: 0,
    prosperity: 0,
    health: 0,
  }


  ngOnInit(){
    this.statistics = this.stats;
  }

  changeType() {
    if (this.type === 'card') {
      this.type = 'details';
    }
  }
}
