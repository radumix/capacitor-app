

import { NgModule, } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IssuePage } from './issue/issue.page';
import { SearchPage } from './search/search.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { AccordianComponent } from './components/accordian/accordian.component';
import { RateUsPage } from './rate-us/rate-us.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CartComponent } from './widget/cart/cart.component';
import { DraggableModule } from './draggable/draggable.module';

@NgModule({
  declarations: [AppComponent, IssuePage, SearchPage, RateUsPage, CartComponent],
  entryComponents: [IssuePage, SearchPage, RateUsPage],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    DraggableModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    SocialSharing,
    FirestoreService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
