import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.scss']
})
export class MapLayoutComponent {

  @Input() path: string = '';



  menuItems = [

    {
      name:'inventory',
      path: 'inventory'
    },
    {
      name:'skills',
      path: 'skills'
    },
    {
      name:'quests',
      path: 'quests'
    },
    {
      name:'arena',
      path: 'arena'
    },
    {
      name:'shop',
      path: 'shop'
    }
]
}
