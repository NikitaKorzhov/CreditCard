import { Component, OnInit } from '@angular/core';
import { cardService } from '../../shared/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  inp: string;
  day: number;
  cvvMaskl:object=[];
  constructor(public cardd: cardService) { }

  ngOnInit(): void {
    this.cvvMaskl=[/[0-9]/, /\d/, /\d/]
  }
  
  logo(){return `assets/${this.cardd.typeCard()}.png`}
  tr() { this.cardd.transform() }
}
