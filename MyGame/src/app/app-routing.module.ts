import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {CharacterViewComponent} from "./character-view/character-view.component";
import {QuestsViewComponent} from "./quests-view/quests-view.component";

const routes: Routes = [
  {
    path:  '',
    loadChildren: () => import('./game-view/game-view.module').then(m => m.GameViewModule)
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
