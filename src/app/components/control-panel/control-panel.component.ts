import { Component, OnInit } from '@angular/core';
import { cardService } from '../../shared/card.service';
import { KeyboardService } from '../../shared/keyboard/keyboard.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(public cardd: cardService,public keyboard:KeyboardService) { }

  ngOnInit(): void {
  }
  isCVV(){return this.cardd.card.cvv.length==3}
  isSubmit() {return !this.cardd.card.face&&this.isCVV()&&this.cardd.card.number.length==16}
  message(){this.cardd.alertCard()}








  tr() { 
this.keyboard.shufleKeys()
    this.cardd.transform() 
  }
  
  back() { 
    this.keyboard.delKeys()
        this.cardd.transform() 
      }

}
