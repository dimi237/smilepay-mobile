import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  balance: any;
  transactions: any;
  constructor() { }


  ngOnInit() {
    this.balance = {
      planified: 800,
      sold: 5700,
      diff: 10.5,
      type: 'deficit',
    }

    this.transactions = [
      {
        ref: '001',
        beneficiary: 'Withdrawal',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Saving',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Withdrawal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Saving',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      },
      {
        ref: '001',
        beneficiary: 'Withdrawal',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Saving',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Withdrawal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Saving',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      },
      {
        ref: '001',
        beneficiary: 'Withdrawal',
        date: 1652172325000,
        type: 'expense',
        amount: 52,
        image: 'photoshop'
      },
      {
        ref: '002',
        beneficiary: 'Saving',
        date: 1651998747000,
        type: 'saving',
        amount: 20.1,
        image: 'paypal'
      },
      {
        ref: '003',
        beneficiary: 'Withdrawal',
        date: 1651937547000,
        type: 'expense',
        amount: 30,
        image: 'paypal'
      },
      {
        ref: '004',
        beneficiary: 'Saving',
        date: 1651921227000,
        type: 'saving',
        amount: 15.5,
        image: 'qiwi'
      }
    ]
  }

}
