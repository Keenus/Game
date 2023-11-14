import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewRoutingModule } from './game-view-routing.module';
import {InventoryComponent} from "./inventory/inventory.component";
import {ArenaComponent} from "./arena/arena.component";
import {ShopComponent} from "./shop/shop.component";
import { SkillsComponent } from './skills/skills.component';
import { QuestsComponent } from './quests/quests.component';
import { TavernComponent } from './tavern/tavern.component';

@NgModule({
  declarations: [
    ShopComponent,
    InventoryComponent,
    ArenaComponent,
    SkillsComponent,
    QuestsComponent,
    TavernComponent
  ],
  imports: [
    CommonModule,
    GameViewRoutingModule,
  ]
})
export class GameViewModule { }
