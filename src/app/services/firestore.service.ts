import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { UtilsServiceService } from './utils-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  productsCollectionReference: AngularFirestoreCollection<Products>;
  categoriesCollectionReference: AngularFirestoreCollection<Category>;
  offersCollectionReference: AngularFirestoreCollection<Offer>;
  userCollectionRefrence: AngularFirestoreCollection<User>;
  addressCollectionRefrence: AngularFirestoreCollection;
  ordersCollectionRefrence: AngularFirestoreCollection;
  categories: any = [];
  promoCodes: any = [];
  UserAddress: any = [];
  UserOrders: any = [];
  recentSearches: any = [];
  constructor(
    private utils: UtilsServiceService, public Afs: AngularFirestore
  ) { }

  public async getProducts() {
    this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.orderBy('name'));
    return this.productsCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          console.log("got here");
          const id = dataItems.payload.doc.id;
          const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
          return { id, units: 0, salePrice: salePrice, ...data };
        }))
      );
  }
  public async getCategoriesHomePage() {
    this.categories = [];
    this.categoriesCollectionReference = this.Afs.collection<Category>('categories', ref => ref.where('home_page', '==', true).orderBy('name'));

    return this.categoriesCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map((dataItems) => {
          const data = dataItems.payload.doc.data() as Category;
          const id = dataItems.payload.doc.id;
          this.categories.push({ id: id, child: [], ...data });
          return { id, child: [], ...data };
        }))
      );
  }
  public async getProductsAccordingToCategory(category) {
    this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.where('categories', 'array-contains', category).orderBy('name'));
    return this.productsCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          const id = dataItems.payload.doc.id;
          const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
          const pos = this.categories.map(function (e) { return e.id; }).indexOf(category);
          if (this.categories[pos].child.map(function (e) { return e.id; }).indexOf(id) === -1) {
            this.categories[pos].child.push({ id, units: 0, salePrice: salePrice, ...data });
          }
          return { id, units: 0, salePrice: salePrice, ...data };
        }))
      );
  }
  public async getProductsAccordingToTags(tag) {
    this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.where('tags', '==', tag).orderBy('name'));
    return this.productsCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          const id = dataItems.payload.doc.id;
          const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
          return { id, units: 0, salePrice: salePrice, ...data };
        }))
      );
  }
  public async getCategories() {
    this.categories = [];
    this.categoriesCollectionReference = this.Afs.collection<Category>('categories', ref => ref.orderBy('name'));
    return this.categoriesCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data = dataItems.payload.doc.data() as Category;
          const id = dataItems.payload.doc.id;
          this.categories.push({ id: id, child: [], ...data });
          return { id, ...data };
        }))
      );
  }

  public async getOffers() {
    this.offersCollectionReference = this.Afs.collection<Offer>('offers', ref => ref.orderBy('title'));
    return this.offersCollectionReference
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data = dataItems.payload.doc.data() as Offer;
          const id = dataItems.payload.doc.id;
          this.promoCodes.push({ id, ...data });
          return { id, ...data };
        }))
      );
  }
  public async getCurrentUserInfo(userId) {
    this.userCollectionRefrence = this.Afs.collection<User>('users', ref => ref.where('userId', '==', userId).orderBy('username'));
    return this.userCollectionRefrence
      .snapshotChanges().pipe(
        map((res: any) => {
          res.map(dataItems => {
            const data = dataItems.payload.doc.data() as User;
            const id = dataItems.payload.doc.id;
            this.utils.userInfo = { id, ...data };
            return { id, ...data };
          });
        })
      );
  }
  public async getUserAddress() {
    this.addressCollectionRefrence = this.Afs.collection<Products>('Address', ref => ref.where('userId', '==', this.utils.userInfo.userId).orderBy('locality'));
    return this.addressCollectionRefrence
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          const id = dataItems.payload.doc.id;
          this.UserAddress.push({ id, ...data });
          return { id, ...data };
        }))
      );
  }
  public async getUserOrders() {
    this.ordersCollectionRefrence = this.Afs.collection<Products>('Orders', ref => ref.where('userId', '==', this.utils.userInfo.userId).orderBy('selectedTime'));
    return this.ordersCollectionRefrence
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          const id = dataItems.payload.doc.id;
          this.UserOrders.push({ id, ...data });
          return { id, ...data };
        }))
      );
  }
  public async searchProducts(value) {
    console.log(value);
    this.ordersCollectionRefrence = this.Afs.collection<Products>('products', ref => ref.orderBy('name').startAt(value).endAt(value + '\uf8ff'));
    return this.ordersCollectionRefrence
      .snapshotChanges().pipe(
        map(res => res.map(dataItems => {
          const data: any = dataItems.payload.doc.data() as Products;
          const id = dataItems.payload.doc.id;
          const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
          this.UserOrders.push({ id, ...data });
          return { id, ...data };
        }))
      );
  }
  public async createUser(result) {
    this.userCollectionRefrence = this.Afs.collection<User>('users');
    await this.utils.openLoader();
    await this.userCollectionRefrence.add({ ...result });
    await this.utils.closeLoading();
  }
  public async createUserOrder(grandTotal, addCart, promoCode, selectedDay, selectedTime, address) {
    this.ordersCollectionRefrence = this.Afs.collection('Orders');
    await this.utils.openLoader();
    if (Object.keys(promoCode).length) {

      await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, promoCode, selectedDay, selectedTime, address, userId: this.utils.userInfo.userId });
    } else {
      await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, selectedDay, selectedTime, address, userId: this.utils.userInfo.userId });
    }
    await this.utils.closeLoading();
  }
  public async addUserAddress(result) {
    this.addressCollectionRefrence = this.Afs.collection('Address');
    await this.utils.openLoader();
    await this.addressCollectionRefrence.add({ ...result, userId: this.utils.userInfo.userId });
    await this.utils.closeLoading();
  }
  public async updateUser(dataId, result) {
    this.userCollectionRefrence = this.Afs.collection<User>('users');
    await this.utils.openLoader();
    delete result.id;
    await this.userCollectionRefrence.doc(dataId).update({ ...result });
    await this.utils.closeLoading();
  }



  
}

export interface Products {
  name: string;
  rate: string;
  description: string;
  offer: string;
  instruction: string;
  pin: number;
  images: [];
  id?: string;
}
export interface Category {
  name: string;
  description: string;
  images: [];
  id?: string;
}


export interface Offer {
  title: string;
  description: string;
  condition: string;
  id?: string;
}

export interface User {
  email: string;
  id: string;
  username: string;
}
