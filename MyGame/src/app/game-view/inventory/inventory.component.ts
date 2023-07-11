import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  armoryParts = [
    {
      name: 'sword',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'shield',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'helmet',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'armor',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'boots',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
    {
      name: 'gloves',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
      }
    },
  ]
  inventory = [
    {
      type: 'sword',
      name: 'Short Sword',
      stats: {
        str: 5,
        ag: 5,
        int: 0,
      },
      path: 'assets/items/short-sword.png'
    },
    {
      type: 'sword',
      name: 'Long Sword',
      stats: {
        str: 10,
        ag: 0,
        int: 0,
      },
      path: 'assets/items/long-sword.png'
    },
    {
      type: 'helmet',
      name:'Gold Helmet',
      stats: {
        str: 5,
        ag: 5,
        int: 5,
      },
      path: 'assets/items/gold-helmet.png'
    },
    {
      type: 'helmet',
      name: 'Light Helmet',
      stats: {
        str: 0,
        ag: 10,
        int: 0,
      },
      path: 'assets/items/light-helmet.png'
    },
    {
      type: 'helmet',
      name: 'Heavy Helmet',
      stats: {
        str: 10,
        ag: 0,
        int: 0,
      },
      path: 'assets/items/heavy-helmet.png'
    },
    {
      type: 'armor',
      name: 'Gold Armor',
      stats: {
        str: 5,
        ag: 5,
        int: 5,
},
      path: 'assets/items/gold-armor.png'
    },
    {
      type: 'armor',
      name: 'Light Armor',
      stats: {
        str: 0,
        ag: 10,
        int: 0,
      },
      path: 'assets/items/light-armor.png'
    },
    {
      type: 'armor',
      name: 'Heavy Armor',
      stats: {
        str: 10,
        ag: 0,
        int: 0,
      },
      path: 'assets/items/heavy-armor.png'
    },
    {
      type: 'shield',
      name: 'Gold Shield',
      stats: {
        str: 5,
        ag: 5,
        int: 5,
      },
      path: 'assets/items/gold-shield.png'
    },
    {
      type: 'boots',
      name: 'Gold Boots',
      stats: {
        str: 5,
        ag: 5,
        int: 5,
      },
      path: 'assets/items/gold-boots.png'
    },
    {
      type: 'gloves',
      name: 'Gold Gloves',
      stats: {
        str: 5,
        ag: 5,
        int: 5,
      },
      path: 'assets/items/gold-gloves.png'
    },
    {
      type: 'shield',
      name: 'Light Shield',
      stats: {
        str: 0,
        ag: 10,
        int: 0,
      },
      path: 'assets/items/light-shield.png'
    },
    {
      type: 'boots',
      name: 'Light Boots',
      stats: {
        str: 0,
        ag: 10,
        int: 0,
      },
      path: 'assets/items/light-boots.png'
    }
]

  filteredInventory = this.inventory;

  filterInventory(type: string) {
    this.filteredInventory = this.inventory.filter(item => item.type === type);
  }

}
