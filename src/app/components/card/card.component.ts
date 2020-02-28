import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  inp:string;
  day:number;
  card:number
  mounth:string;
  a:string;
  public mask = [ /[1-9]/, /\d/, /\d/, /\d/, ' ',' ', /\d/, /\d/, /\d/, /\d/, ' ',' ', /\d/, /\d/, /\d/, /\d/,' ',' ', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
    this.inp="";
    this.a="rotateY(0deg)"
  }
  cl(){console.log(this.card)}
  tr(){this.a=this.a=="rotateY(180deg)"?"rotateY(0deg)":"rotateY(180deg)"}
}
