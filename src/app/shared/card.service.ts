import { Injectable } from "@angular/core"
export interface Card {
    rotate: string
    number:string
    mounth:number
    year:number
    face:boolean
    cvv:string
};
@Injectable({ providedIn: "root" })
export class cardService {
    public card: Card = {
        rotate: "rotateY(0deg)",
        number:"",
        mounth:null,
        year:null,
        cvv:"",
        face:true
    };
    public  c:number=0;
    typeCard(){return this.card.number[0]=='5'?"masterCard":"visa"}

    transform() { 
        this.card.rotate =`rotateY(${this.c+=180}deg)` 
       this.card.face=!this.card.face;       
    }
    addToCvv(el){
        if(this.card.cvv.length<3){
            this.card.cvv+=el;
        }
    }
    dellFromCvvLast(){
        this.card.cvv=this.card.cvv.substr(0,this.card.cvv.length-1);
    }
    alertCard(){
        alert("number: "+this.card.number+"\n"+"Mounth: "+this.card.mounth+"\n"+"Year: "+this.card.year+"\n"+"cvv: "+this.card.cvv)
    }

}