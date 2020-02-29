import { Injectable } from "@angular/core"
export interface Card {
    rotate: string
    mask: object
    number:string
};
@Injectable({ providedIn: "root" })
export class cardService {
    public card: Card = {
        rotate: "rotateY(0deg)",
        mask: [/[1-9]/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/],
        number:""
    };
    typeCard(){return this.card.number[0]=='4'?"visa":"masterCard"}
    transform() { this.card.rotate = this.card.rotate == "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)" }

}