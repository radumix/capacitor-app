import { Injectable } from '@angular/core';
import {  interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  cDate: string;
  cTime: string;
  ampm: string;
  runningTime: string;
  counter=0;
  reccount=0;
  constructor() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n => this.timer(n));
   }

   timer(val: any) {
    let today = new Date();
    this.cDate = this.getMonthAbs((today.getMonth() + 1)) + '-' + this.getConCat(today.getDate()) + "-" + today.getFullYear();
    var today2 = new Date();
    this.cTime = this.getHour(today2.getHours()) + ":" + this.getConCat(today2.getMinutes());
    
    if(this.counter>59){
      this.counter=0;
      this.reccount++;
      this.runningTime = this.reccount.toString()+":"+this.counter.toString();  
    }else if(this.counter<60){
      this.runningTime = this.reccount.toString()+":"+this.counter.toString();  
    }
    this.counter++;

  }

  getMonthAbs(value: any): any {
    let mn = "";
    if (value === 12) {
      mn = "Dec"
    }
    return mn;
  }

  getConCat(value: any): any {
    let cc = "";
    if (value < 10) {
      cc = "0" + value.toString();
    } else if (value > 9) {
      cc = value.toString();
    }
    return cc;
  }

  getHour(value: any): any {
    //console.log(value);
    let hr = "";

    if (value < 10) {
      hr = "0" + value.toString();
      this.ampm = "AM";
    } else if (value === 13) {
      hr = "01";
      this.ampm = "PM";
    } else if (value === 14) {
      hr = "02";
      this.ampm = "PM";
    } else if (value === 15) {
      hr = "03";
      this.ampm = "PM";
    } else if (value === 16) {
      hr = "04";
      this.ampm = "PM";
    } else if (value === 17) {
      hr = "05";
      this.ampm = "PM";
    } else if (value === 18) {
      hr = "06";
      this.ampm = "PM";
    } else if (value === 19) {
      hr = "07";
      this.ampm = "PM";
    } else if (value === 20) {
      hr = "08";
      this.ampm = "PM";
    } else if (value === 21) {
      hr = "09";
      this.ampm = "PM";
    } else if (value === 22) {
      hr = "10";
      this.ampm = "PM";
    } else if (value === 23) {
      hr = "11";
      this.ampm = "PM";
    } else if (value === 24) {
      hr = "12";
      this.ampm = "PM";
    } else if (value === 0) {
      hr = "12";
      this.ampm = "PM";
    }
    return hr;
  }



}
