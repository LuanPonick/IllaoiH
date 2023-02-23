import { Component } from '@angular/core';
import { HistoriaPageServiceService } from 'src/app/service/historia-page-service.service';
import { IllaoiStts } from 'src/app/illaoiInfo';

@Component({
  selector: 'app-historia-page',
  templateUrl: './historia-page.component.html',
  styleUrls: ['./historia-page.component.css']
})
export class HistoriaPageComponent {
  lore? : IllaoiStts;
  constructor(private historiaservice : HistoriaPageServiceService){

    this.historiaservice.getLore().subscribe(value=>this.lore = value);
    console.log(this.lore?.data.Illaoi.lore);
  }
} 
