import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaPageComponent } from './components/historia-page/historia-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'historia',component:HistoriaPageComponent},
  {path:'itens',component:ItensPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
