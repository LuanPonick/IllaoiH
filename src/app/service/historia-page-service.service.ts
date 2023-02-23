import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IllaoiStts } from 'src/app/illaoiInfo';

@Injectable({
  providedIn: 'root'
})
export class HistoriaPageServiceService {
  private url = "https://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion/Illaoi.json";

  constructor(private http : HttpClient) { }

  getLore() : Observable<IllaoiStts>{
    return this.http.get<IllaoiStts>(`${this.url}`);
  }
}
