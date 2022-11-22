import { Component, OnInit } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactions: any[];
  options: EChartsOption;
  constructor() { }

  ngAfterViewInit() {
    // Chart.register(...registerables);  
    this.lineChartMethod();
  }

  ngOnInit() {
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

  lineChartMethod() {
    const xAxisData = ['01', '05', '10', '15', '20'];
    const data1 = this.transactions.map((elt => elt.amount));

    this.options = {

      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          type: 'line',
          smooth: true,
          data: data1,
          color: '#4d7e7d',
          lineStyle: {
            color: '#39706e',
            shadowBlur: 100,
            shadowColor: '#4d7e7d',
          },
          animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}


