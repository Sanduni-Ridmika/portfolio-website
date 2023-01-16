import { Service } from "./Service";

export class CartItem {
  constructor (public service:Service) {
  }
  quantity:number = 1;
  price: number = this.service.price;
}
