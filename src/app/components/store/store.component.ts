import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
stores:any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.stores = this.dataService.stores;

    console.log(this.dataService.stores);
  }

}
