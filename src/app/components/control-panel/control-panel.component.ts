import { Component, OnInit } from '@angular/core';
import { cardService } from '../../shared/card.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(public cardd: cardService) { }

  ngOnInit(): void {
  }
  isCVV(){return this.cardd.card.cvv.length==3}
  isSubmit() {return !this.cardd.card.face&&this.isCVV()}
  message(){alert(this.cardd.card.number)}
  tr() { this.cardd.transform() }

}
