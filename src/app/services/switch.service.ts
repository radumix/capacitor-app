import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  sidemenu = [{
    'lefthandlebar': true,
    'rightsunicon': true,
    'dateandtime': true,
    'ads': true,
    'searchbar': true,
    'leftbackbutton': true
  }];
  constructor() {}
}