import { Component, OnInit } from '@angular/core';
import { cardService } from '../../shared/card.service';
import { KeyboardService } from '../../shared/keyboard/keyboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  day: number;
  mounth:number;
  number:number
  numberMask:object;
  mounthMask:object;
  yearMask:object;
  cvvMaskl:object=[];
  constructor(public cardd: cardService, public keyboard:KeyboardService) { }

  ngOnInit(): void {
    this.numberMask=[/[5|4]/,/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/]
    this.mounthMask=[/[0-1]/,/[0-9]/]
    this.yearMask=[/[2-9]/,/[0-9]/]
    this.cvvMaskl=[/[0-9]/, /\d/, /\d/]
  }

  fromNumberToModel(ev){
    let s:string=ev.trim()
    s.replace(' ',"")
    var n="";
    for(let i=0;i<s.length;i++){
      if(s[i]!=' '){
        if(s[i]!='_'){ n+=s[i]}}
    }
    this.cardd.card.number=n
  }
  
  logo(){return `assets/${this.cardd.typeCard()}.png`}
  tr() { 
    if(!this.cardd.card.face){
      this.keyboard.shufleKeys();
    }
    this.cardd.transform() }
}