import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'widget-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(
    public cart: CartService,
    private route: Router,
  ) { }

  ngOnInit() {}
  
  cartPage() {
    this.route.navigate(['cart']);
  }
}
