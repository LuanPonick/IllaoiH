import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilidadePageComponent } from './components/abilidade-page/abilidade-page.component';
import { DicasPageComponent } from './components/dicas-page/dicas-page.component';
import { EstrategiaPageComponent } from './components/estrategia-page/estrategia-page.component';
import { HistoriaPageComponent } from './components/historia-page/historia-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';
import { MeetupsPageComponent } from './components/meetups-page/meetups-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'historia',component:HistoriaPageComponent},
  {path:'itens',component:ItensPageComponent},
  {path:'abilidade',component:AbilidadePageComponent},
  {path:'estrategias',component:EstrategiaPageComponent},
  {path:'meetups',component:MeetupsPageComponent},
  {path:'dicas',component:DicasPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
