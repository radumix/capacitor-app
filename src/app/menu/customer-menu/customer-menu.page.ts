import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.page.html',
  styleUrls: ['./customer-menu.page.scss'],
})
export class CustomerMenuPage implements OnInit {
  navigate =
  [
    {
      title : "Home",
      url   : "/home",
      icon  : "home"
    },
    {
      title : "Chat",
      url   : "/chat",
      icon  : "chatboxes"
    },
    {
      title : "Contacts",
      url   : "/contacts",
      icon  : "contacts"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
