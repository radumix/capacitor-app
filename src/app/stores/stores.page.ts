import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  constructor(public dataService: DataService) {}

  ngOnInit(){
    console.log(this.dataService.stores);
  }

}
