import { Component } from '@angular/core';
import { IllaoiStts } from 'src/app/illaoiInfo';
import { AbilidadePageServiceService } from 'src/app/service/abilidade-page-service.service';
import { SpeelIms } from 'src/app/SpeelImgs';

@Component({
  selector: 'app-abilidade-page',
  templateUrl: './abilidade-page.component.html',
  styleUrls: ['./abilidade-page.component.css']
})
export class AbilidadePageComponent {
  illaoistts? : IllaoiStts;
  PassiveImg? : any;

  constructor(private abilidadeService:AbilidadePageServiceService){
    this.abilidadeService.getAbiliti().subscribe((values)=>this.illaoistts = values); 
    this.getAllImgs();
  }
  getAllImgs(){
    this.PassiveImg = this.abilidadeService.getPassiveImg();
    
  };  
}
