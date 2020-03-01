import { Injectable } from "@angular/core"
export interface Card {
    rotate: string
    mask: object
    number:string
    face:boolean
    cvv:string
};
@Injectable({ providedIn: "root" })
export class cardService {
    public card: Card = {
        rotate: "rotateY(0deg)",
        mask: [/[5|4]/,/[1-9]/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/],
        number:"",
        cvv:"",
        face:true
    };
    public ar:object=[]
    public  c:number=0;
    typeCard(){return this.card.number[0]=='5'?"masterCard":"visa"}
    transform() { 
        this.card.rotate =`rotateY(${this.c+=180}deg)` 
        this.card.face=!this.card.face;
        this.ar=!this.card.face?[1,2,3,4,5,6,7,8,9,0]:[];
      
       
    }

}