import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Service } from '../shared/models/Service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //define a field that holds the cart
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(service: Service): void {
    let cartItem = this.cart.items.find(item => item.service.id === service.id); // find cart item by id
    if(cartItem)
    return; //if already added return

    this.cart.items.push(new CartItem(service)); //if not add new cart item
    this.setCartToLocalStorage();
  }
  //remove item from cart
  removeFromCart(serviceId:string): void {
    this.cart.items = this.cart.items.filter(item => item.service.id != serviceId);
    this.setCartToLocalStorage();
  }

  //change quantity of a item
  changeQuantity(serviceId:string, quantity:number) {
    let cartItem = this.cart.items.find(item => item.service.id === serviceId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.service.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  //setting cart to the local storage
  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  //getting cart from the local storage
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
