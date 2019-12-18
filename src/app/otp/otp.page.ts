import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  public obj = document.getElementById('partitioned');
  public inputFocus1: boolean;
  public inputFocus2: boolean;
  public inputFocus3: boolean;
  public inputFocus4: boolean;
  public otpInput1: any;
  public otpInput2: any;
  public otpInput3: any;
  public otpInput4: any;
  public phoneNumber: any;
  public timeLeft;
  public resendMsgToggle = false;

  constructor(
    private route: Router, 
    private menuCtrl: MenuController, 
    public actvRoute: ActivatedRoute
    ) { 
      this.actvRoute.params.subscribe((params) => {
        this.phoneNumber = params.phoneNumber;
    });
    this.inputFocus2 = true;
    }

  ngOnInit() {
  }

  verify() {
    this.route.navigate(['home']);
  }
  
  onchange(num) {
    if (num === 1) {
      this.inputFocus1 = false;
      this.inputFocus2 = true;
    } else if (num === 2) {
      this.inputFocus3 = true;
    } else if (num === 3) {
      this.inputFocus4 = true;
    } else {
      this.inputFocus1 = false;
      this.inputFocus2 = false;
      this.inputFocus3 = false;
      this.inputFocus4 = false;
  
    }
  
  }
  
  next(el, val) {
    const numberRegex = /^[0-9\s]*$/;
    const regexp = /^\S*$/;
    if (val === '1' && numberRegex.test(this.otpInput1) && regexp.test(this.otpInput1)) {
      el.setFocus();
    } else if (val === '2' && numberRegex.test(this.otpInput2) && regexp.test(this.otpInput2)) {
      el.setFocus();
    } else if (val === '3' && numberRegex.test(this.otpInput3) && regexp.test(this.otpInput3)) {
      el.setFocus();
    }
  
  }
  preview(el) {
    if (el === 'otp4') {
      el.setFocus();
    }
  
  }
  
  timerFunction() {
    const countDownDate = new Date('Jan 5, 2021 15:5:25').getTime();
  
  
  const x = setInterval(function() {
  
  
    const now = new Date().getTime();
  
  
    const distance = countDownDate - now;
  
  
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    document.getElementById('timer').innerHTML = minutes + 'm ' + seconds + 's ';
  
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'EXPIRED';
    }
  }, 1000);
  
  }
  
  resendMsg() {
    this.resendMsgToggle = true;
    setTimeout(() => this.resendMsgToggle = false, 2000);
  
  }

}
