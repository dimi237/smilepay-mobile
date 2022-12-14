import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  transactions: any[];

  constructor() { }

  async ionViewWillEnter() {
  }

  ngOnInit(): any {
    this.user = {
      fullName: 'Dimitri Signe',
      card: {
        username: 'Dimitri Signe',
        number: '3452 **** **** 6258',
        expiration: '10/25',
        balance: '592.323'
      }
    }

    this.transactions = [
      {
        ref: '001',
        beneficiary: 'Adobe Photoshop',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Paypal',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Paypal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Qiwi',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      },
      {
        ref: '001',
        beneficiary: 'Adobe Photoshop',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Paypal',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Paypal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Qiwi',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      },
      {
        ref: '001',
        beneficiary: 'Adobe Photoshop',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Paypal',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Paypal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Qiwi',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      }
    ]
  }

}
