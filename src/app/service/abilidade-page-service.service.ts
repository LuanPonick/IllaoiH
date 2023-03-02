import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IllaoiStts } from '../illaoiInfo';
import { SpeelIms } from '../SpeelImgs';

@Injectable({
  providedIn: 'root'
})
export class AbilidadePageServiceService {

  private url = "https://ddragon.leagueoflegends.com/cdn/13.3.1";
  

  constructor(private http : HttpClient ) { 

  }

  getAbiliti() : Observable<IllaoiStts>{
    return this.http.get<IllaoiStts>(`${this.url}/data/pt_BR/champion/Illaoi.json`);
  } 
  getPassiveImg() : any{
    return this.http.get(`${this.url}/img/passive/Illaoi_P.png`)
  }
}
