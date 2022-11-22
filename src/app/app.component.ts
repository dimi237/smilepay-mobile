import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private commonSrv: CommonService,
    private router: Router

  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {

      try {
        await this.hasExpiredSession();
      }
      catch (error) {
        console.log('error', error);
        this.commonSrv.showToastMessageTop(`Veuillez vérifier votre accès internet`);
      }
    });
  }


  async hasExpiredSession() {
    try {
      const user = await this.commonSrv.getObject("user");

      if (!user) { return this.router.navigate(['login']); }

    } catch (error) {
      console.log('error', error);
      this.commonSrv.showToastMessageTop(`Veuillez vérifier votre accès internet`);
    }
  }
}
