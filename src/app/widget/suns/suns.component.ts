import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'widget-suns',
  templateUrl: './suns.component.html',
  styleUrls: ['./suns.component.scss'],
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
export class SunsComponent implements OnInit {
  state = "transparent";
  constructor() {}

  ngOnInit() {}

  makeOpaque() {
    this.state = "opaque";
    setTimeout(() => {
      this.state = "transparent";
    }, 5000);
  }

  makeTransparent() {
    this.state = "transparent";
  }

}
