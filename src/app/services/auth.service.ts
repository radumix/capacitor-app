import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
// import { UserDataService } from "../data-services/user-data.service";
import { User } from 'firebase';
import { resolve } from 'url';
import { UtilsServiceService } from './utils-service.service';
import { FirestoreService } from './firestore.service';

export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
      return !!this.$uid;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  userID = this.authInfo$.asObservable();
  constructor(
    private fireStore: FirestoreService, 
    private fireAuth: AngularFireAuth,
    private util: UtilsServiceService
  ) {
    this.fireAuth.authState.pipe(
      take(1)
  ).subscribe(user => {
      if (user) {
          this.authInfo$.next(new AuthInfo(user.uid));
      }
  });
   }

   public forgotPassoword(email: string) {
    this.fireAuth.auth.sendPasswordResetEmail(email).then(() => {
        this.util.presentToast('Email Sent', true, 'bottom', 2100);
    }).catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));
}

public createAccount(email: string, password: string, username: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
      this.util.openLoader();
      this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(res => {
              if (res.user) {
                  this.authInfo$.next(new AuthInfo(res.user.uid));
                  this.util.closeLoading();
                  this.fireStore.createUser({
                      email: email,
                      userId: res.user.uid,
                      username: username
                  });
                  resolve(res.user);
              }
          })
          .catch(err => {
              this.util.closeLoading();
              // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
              reject(`creation failed ${err}`);
          });
  });
}

public login(email: string, password: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
      this.util.openLoader();
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
          .then(res => {
              if (res.user) {
                  this.util.closeLoading();
                  this.authInfo$.next(new AuthInfo(res.user.uid));
                  resolve(res.user);
              }
          })
          .catch(err => {
              this.util.closeLoading();
              // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
              reject(`login failed ${err}`);
          });
  });
}

public logout(): Promise<void> {
  // this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
  return this.fireAuth.auth.signOut();
}
public checkAuth() {
  return new Promise(resolve => {
      this.fireAuth.auth.onAuthStateChanged(user => {
          resolve(user);
      });
  });
}


}
