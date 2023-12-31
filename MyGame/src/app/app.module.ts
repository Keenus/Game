import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MenuComponent } from './menu/menu.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { QuestsViewComponent } from './quests-view/quests-view.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MenuComponent,
    GameViewComponent,
    CharacterViewComponent,
    QuestsViewComponent,
    FooterComponent,
    CardComponent,
    ProgressBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatProgressBarModule,
        HttpClientModule
    ],
    providers: [
    ],
    exports: [
        ProgressBarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
