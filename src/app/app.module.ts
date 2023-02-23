import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoNavbarModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PoButtonModule } from '@po-ui/ng-components';
import { HistoriaPageComponent } from './components/historia-page/historia-page.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomePageComponent,
    HistoriaPageComponent,
    ItensPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    PoNavbarModule,
    BrowserAnimationsModule,
    PoButtonModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
