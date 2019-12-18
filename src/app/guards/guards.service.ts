import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UtilsServiceService } from '../services/utils-service.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private authServ: AuthService, private util: UtilsServiceService) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.authServ.checkAuth().then(user => {
      if (user) {
        return true;
      } else {
        this.util.navigate('login', true);
      }
    });
  }
}
