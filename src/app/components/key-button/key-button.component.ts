import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { cardService } from '../../shared/card.service';

@Component({
  selector: 'app-key-button',
  templateUrl: './key-button.component.html',
  styleUrls: ['./key-button.component.css']
})
export class KeyButtonComponent implements OnInit {
  value:string;
  b:object
  constructor(public cardd: cardService,el:ElementRef) {this.value=el.nativeElement.value}

  ngOnInit(): void {
    this.b=this.cardd.ar
  }
  cl(event){
   // alert(this.cardd.card.number)
    this.cardd.card.cvv+=event.target.value;
  }

}
