
import { Component } from '@angular/core';

import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { RateUsPage } from './rate-us/rate-us.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { UtilsServiceService } from './services/utils-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Shop by Category',
      url: '/categories',
      icon: 'apps'
    },
    {
      title: 'Offer Zone',
      url: '/offers',
      icon: 'card'
    }
  ];

  public otherPages = [

    {
      title: 'Need Help',
      url: '/need-help',
      icon: 'help-circle-outline',
      mode: 'ios'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'information-circle-outline',
      mode: 'ios'
    },
    {
      title: 'Log out',
      url: '/login',
      icon: 'log-out',
      mode: 'md'
    }
  ];

  public userDetails: { profileUrl: string, name: string, phoneNo: string, location: any };

  public userPersonalDetails: Array<any>;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private modalController: ModalController,
    public menuCtrl: MenuController,
    private socialSharing: SocialSharing,
    public authService: AuthService,
    public fireStore: FirestoreService,
    public util: UtilsServiceService
  ) {
    this.initializeApp();
    this.userDetails = { profileUrl: 'assets/images/user.jpeg', name: ' Guest', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
    this.authService.userID.subscribe(filter => {
      this.fireStore.getCurrentUserInfo(filter.$uid).then((data) => {
        data.subscribe(todos => {});
      });
    });
    this.userDetails = { profileUrl: 'assets/images/user.png', name: ' Guest', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
    this.userPersonalDetails = [
      {
        icons: 'assets/images/delivery-truck.png',
        title: 'My Order',
        url: '/order',
        value: 'order'
      },
      {
        icons: 'assets/images/card.png',
        title: 'My Card',
        url: '/my-account',
        value: 'mycard'
      },
      {
        icons: 'assets/images/placeholder.png',
        title: 'My Address',
        url: '/my-account',
        value: 'MyAddress'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  navigatePage(pageUrl, value?) {
    this.menuCtrl.toggle();
    if (pageUrl === '/my-account') {
      this.route.navigate([pageUrl, { title: value }]);
    } else {
      this.route.navigate([pageUrl]);
    }
  }
  userProfile() {
    this.menuCtrl.toggle();
    this.route.navigate(['my-account', { title: 'profile' }]);

  }

  async redirectPage(pageUrl, rateUs) {
    if (pageUrl === '/rate-us') {
      const modal = await this.modalController.create({
        component: RateUsPage,
        cssClass: 'rateUs'
      });
      return await modal.present();
    } else if (pageUrl === '/share') {
      this.socialSharing.share();
    } else {
      this.route.navigate([pageUrl]);

    }

  }

  locationPage() {
    this.menuCtrl.toggle();
    this.route.navigate(['location']);

  }
}
