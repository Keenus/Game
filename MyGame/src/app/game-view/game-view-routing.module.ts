import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryComponent} from "./inventory/inventory.component";
import {ArenaComponent} from "./arena/arena.component";
import {ShopComponent} from "./shop/shop.component";
import {GameViewComponent} from "./game-view.component";
import {TavernComponent} from "./tavern/tavern.component";
import {QuestsComponent} from "./quests/quests.component";
import {SkillsComponent} from "./skills/skills.component";

const routes: Routes = [
  {
    path: '',
    component: GameViewComponent,
    children: [
      {
        path: 'tavern',
        loadChildren: () => import('./tavern/tavern.module').then(m => m.TavernModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'arena',
        loadChildren: () => import('./arena/arena.module').then(m => m.ArenaModule)
      },
      {
        path:'shop',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)
      },
      {
        path: 'quests',
        component: QuestsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameViewRoutingModule { }
