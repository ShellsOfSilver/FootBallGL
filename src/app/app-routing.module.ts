import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainCompetitionComponent} from './main-competition/main-competition.component';
import {MainMatchComponent} from './main-match/main-match.component';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
      {path: 'competition', component: MainCompetitionComponent},
      {path: 'match', component: MainMatchComponent}
    ]}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
