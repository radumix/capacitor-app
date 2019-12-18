import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsServiceService } from '../services/utils-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  first_name = '';
  last_name = '';
  email = '';
  password = '';
  constructor(
    public util: UtilsServiceService, 
    private menuCtrl: MenuController, 
    private authServ: AuthService
  ) { }

  ngOnInit() {
  }

}
