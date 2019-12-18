import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input() public varName: string;
  
  public topSavers;
  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router
  ) {
    this.topSavers = dataServ.topSaversproduct[0];
   }

  ngOnInit() {
    console.log(this.varName);

  }


  addToCart(index) {
    this.topSavers.products[index].units = 1;
    this.cart.addCart.push(this.topSavers.products[index]);
    this.cart.productQty += 1;
    console.log(this.topSavers.products[index])
  }

  updateCart(productID, type) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
    }
    if (type === 'remove') {
      productunits.units -= 1;
      this.cart.productQty -= 1;
    }
  }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

}
