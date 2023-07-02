import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MenuComponent } from './menu/menu.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { QuestsViewComponent } from './quests-view/quests-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MenuComponent,
    GameViewComponent,
    CharacterViewComponent,
    QuestsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
