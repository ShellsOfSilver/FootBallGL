import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GetFootBallDataServise} from './getFootBallData.servise';
import { MainCompetitionComponent } from './main-competition/main-competition.component';
import { MainMatchComponent } from './main-match/main-match.component';
import {AppRoutingModule} from './app-routing.module';
import {DataIdServise} from './dataId.servise';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainCompetitionComponent,
    MainMatchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [GetFootBallDataServise, DataIdServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
