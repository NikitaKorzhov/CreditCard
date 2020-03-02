import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { cardService } from '../../shared/card.service';
import { KeyboardService } from '../../shared/keyboard/keyboard.service';

@Component({
  selector: 'app-key-button',
  templateUrl: './key-button.component.html',
  styleUrls: ['./key-button.component.css']
})
export class KeyButtonComponent implements OnInit {
  value: string;
  b: object
  constructor(public cardd: cardService, el: ElementRef,public keyboard:KeyboardService) { this.value = el.nativeElement.value }

  ngOnInit(): void {
    
  }
  cl(event) {
    // alert(this.cardd.card.number)
    this.cardd.addToCvv(event.target.value);
  }
  del() {
    this.cardd.dellFromCvvLast()
  }

}
