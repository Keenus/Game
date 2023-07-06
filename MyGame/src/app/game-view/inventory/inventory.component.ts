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
}
