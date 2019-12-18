import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsServiceService } from '../services/utils-service.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  selectSegment;
  userDetails;
  profileUrl;
  constructor(
    public cart: CartService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    public utils: UtilsServiceService
  ) {
     // this.userDetails = { profileUrl: 'assets/images/user.png', name: 'John Doe', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
     this.userDetails = this.utils.userInfo;
     this.activeRoute.params.subscribe((res) => {
       this.selectSegment  = res.title;
     });
     this.profileUrl = 'assets/images/user.png';
     this.utils.AddAdressBackUrl = '/my-account';
   }

  ngOnInit() {
  }

  editProfile() {
    this.selectSegment = 'profile';
  }
  cartPage() {
    this.route.navigate(['cart']);
  }

}
