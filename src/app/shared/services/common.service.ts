import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  BASE_URL: string;
  selectedMenu: any;

  constructor(
    private toastController: ToastController,

  ) { }

  timeout(ms: number) {return new Promise(resolve => setTimeout(resolve, ms));}

  async showToastMessageTop(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  async setString(key: string, value: string) {
    localStorage.setItem(key, value);
  }


  async getString(key: string): Promise<any> {
    const data = await localStorage.getItem(key);
    if (data) { return data; }
    return null;
  }

  async setObject(key: string, value: any) {
    await localStorage.setItem(key, JSON.stringify(value));
  }

  async getObject(key: string): Promise<any> {
    const data = localStorage.getItem(key);
    if (data) { return JSON.parse(data); }
    return null;
  }
}
