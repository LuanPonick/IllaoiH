import { Component } from '@angular/core';
import { IllaoiStts } from 'src/app/illaoiInfo';
import { HistoriaPageServiceService } from 'src/app/service/historia-page-service.service';

@Component({
  selector: 'app-historia-page',
  templateUrl: './historia-page.component.html',
  styleUrls: ['./historia-page.component.css']
})
export class HistoriaPageComponent {
  lore? : IllaoiStts;
  constructor(private historiaservice : HistoriaPageServiceService){

    this.historiaservice.getLore().subscribe(value=>this.lore = value);
  }
} 
