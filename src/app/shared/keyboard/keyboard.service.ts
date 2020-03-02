import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  public keys:object
  constructor() { }

   private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  shufleKeys(){
    this.keys=[];
    for(let i:number=0;i<=9;i++){
     this.keys[i]=i;
   }
    this.shuffle(this.keys);
  }
  delKeys(){
    this.keys=[];
  }
}