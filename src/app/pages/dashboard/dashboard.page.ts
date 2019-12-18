import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NavController } from '@ionic/angular';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('1s'))
    ])
  ]
  
})
export class DashboardPage implements OnInit {
  isHide=true;
  visibleState = 'visible';

  public progress: number = 0;
    // Interval function
  protected interval: any;

  constructor(public navCtrl: NavController, private dashboardService: DashboardService) { }



  toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }

  ngOnInit() {
    let data=this.dashboardService.testData();
    console.log(data);
  }

}
