import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  armoryParts = [
    {
      name: 'Sword',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'Shield',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'Helmet',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'Armor',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'Boots',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'Gloves',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
  ]
  inventory = [
    {
      name: 'Short Sword',
      stats: {
        strength: 5,
        agility: 5,
        intelligence: 0,
      },
      path: 'assets/items/short-sword.png'
    },
    {
      name: 'Long Sword',
      stats: {
        strength: 10,
        agility: 0,
        intelligence: 0,
      },
      path: 'assets/items/long-sword.png'
    },
    {
      name:'Gold Helmet',
      stats: {
        strength: 5,
        agility: 5,
        intelligence: 5,
      },
      path: 'assets/items/gold-helmet.png'
    },
    {
      name: 'Light Helmet',
      stats: {
        strength: 0,
        agility: 10,
        intelligence: 0,
      },
      path: 'assets/items/light-helmet.png'
    },
    {
      name: 'Heavy Helmet',
      stats: {
        strength: 10,
        agility: 0,
        intelligence: 0,
      },
      path: 'assets/items/heavy-helmet.png'
    }
]
}
