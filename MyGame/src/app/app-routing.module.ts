import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {GameViewComponent} from "./game-view/game-view.component";
import {CharacterViewComponent} from "./character-view/character-view.component";
import {QuestsViewComponent} from "./quests-view/quests-view.component";

const routes: Routes = [
  {
    path:  'home',
    component: MainViewComponent
  },
  {
    path:  'game',
    loadChildren: () => import('./game-view/game-view.module').then(m => m.GameViewModule)
  },
  {
    path:  'character',
    component: CharacterViewComponent
  },
  {
    path:  'quests',
    component: QuestsViewComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
