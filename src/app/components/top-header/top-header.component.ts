import {
  Component,
  OnInit
} from '@angular/core';
import {
  CartService
} from 'src/app/services/cart.service';
import {
  Router
} from '@angular/router';
import {
  SearchPage
} from '../../search/search.page';
import {
  ModalController
} from '@ionic/angular';
import {
  WidgetService
} from '../../services/widget.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { SwitchService } from '../../services/switch.service';


@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('4000ms ease-in')),
      transition('transparent => opaque', animate('4000ms ease-out'))
    ])
  ]
})
export class TopHeaderComponent implements OnInit {
  state = "transparent";
  slideOptsAds = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  public prodoctSlides: Array<any>;
  constructor(
    public cart: CartService,
    private route: Router,
    private modalController: ModalController,
    public widgetService: WidgetService,
    public sService: SwitchService,

  ) {
    this.prodoctSlides = ['assets/imgs/b1.jpg', 'assets/imgs/b2.jpg', 'assets/imgs/b3.png', 'assets/imgs/b4.jpg'];

  }

  ngOnInit() {
    
  }
  makeOpaque() {
    this.state = "opaque";
    setTimeout(() => {
      this.state = "transparent";
    }, 5000);
    }

    makeTransparent() {
      this.state = "transparent";
    }
  cartPage() {
    this.route.navigate(['cart']);
  }
  async searchPage() {
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    return await modal.present();
  }
}
