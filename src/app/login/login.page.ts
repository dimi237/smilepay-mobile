import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading: boolean;
  userName: string;
  password: string;

  constructor(
    private commonSrv: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
      this.isLoading = true;
      await this.commonSrv.timeout(3000);

      if (this.userName !== 'USR01') {
        return this.commonSrv.showToastMessageTop('Bad Username !!!');
      }

      if (this.password !== 'dme123') {
        return this.commonSrv.showToastMessageTop('Bad Password !!!');
      }
      this.commonSrv.setObject('user', { username: this.userName, password: this.password })
      this.commonSrv.showToastMessageTop('Login successfully !!!');
      this.router.navigate(['home']);

    } catch (error) {
      return this.commonSrv.showToastMessageTop('Something went wrong !!!');
    } finally {
      this.isLoading = false;
    }
  }

}
