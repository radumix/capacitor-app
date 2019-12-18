import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categoryItems;
  constructor(
    public http: HttpClient,
    private route: Router,
    public fsServices: FirestoreService
  ) {
    this.fsServices.getCategories().then((data) => {
      this.categoryItems = data;
    });
   }

  ngOnInit() {
  }

  goToProducts(category) {
    this.route.navigate(['view-category-product', { categoryName: category.name, categoryId: category.id }]);

  }

}
