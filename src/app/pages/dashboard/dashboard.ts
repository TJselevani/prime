// pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

interface StatsCard {
  title: string;
  value: string;
  icon: string;
  color: string;
  change?: string;
}

@Component({
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    CardModule,
    ChartModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ],
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {
  statsCards: StatsCard[] = [];
  chartData: any;
  chartOptions: any;
  pieChartData: any;
  pieChartOptions: any;
  dateRange: Date[] = [];
  recentTransactions: any[] = [];

  ngOnInit() {
    this.initializeStatsCards();
    this.initializeCharts();
    this.initializeTransactions();
    this.setDateRange();
  }

  initializeStatsCards() {
    this.statsCards = [
      {
        title: 'Total Amount Collected',
        value: 'Ksh 6,999,837.00',
        icon: 'pi-dollar',
        color: '#dc3545',
        change: '+12.5%',
      },
      {
        title: 'Total Booking Amount',
        value: 'Ksh 14,565.00',
        icon: 'pi-calendar',
        color: '#0d6efd',
        change: '+8.2%',
      },
      {
        title: 'Total Direct Payment',
        value: 'Ksh 6,985,272.00',
        icon: 'pi-credit-card',
        color: '#198754',
        change: '+15.3%',
      },
      {
        title: 'Total Transactions',
        value: '42,063',
        icon: 'pi-chart-line',
        color: '#ffc107',
        change: '+23.1%',
      },
    ];
  }

  initializeCharts() {
    // Line Chart for Organizations Performance
    this.chartData = {
      labels: ['Nov 30', 'Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7'],
      datasets: [
        {
          label: 'Sales Value (Ksh)',
          data: [450000, 1200000, 1100000, 950000, 1250000, 1150000, 850000, 650000],
          fill: true,
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, 0.1)',
          tension: 0.4,
          borderWidth: 3,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value: any) {
              return 'Ksh ' + value.toLocaleString();
            },
          },
        },
      },
    };

    // Pie Chart for Category Distribution
    this.pieChartData = {
      labels: ['SYSTEM', 'DRIVER', 'FUEL', 'MAINTENANCE'],
      datasets: [
        {
          data: [306994, 6183923, 150000, 350000],
          backgroundColor: ['#0d6efd', '#dc3545', '#ffc107', '#198754'],
          borderWidth: 0,
        },
      ],
    };

    this.pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };
  }

  initializeTransactions() {
    // TODO: Replace with actual API call
    this.recentTransactions = [
      {
        id: 'TXN001',
        date: '2025-12-07',
        vehicle: 'KAB 123X',
        amount: 5500,
        type: 'Payment',
        status: 'Completed',
      },
      {
        id: 'TXN002',
        date: '2025-12-07',
        vehicle: 'KBC 456Y',
        amount: 4200,
        type: 'Booking',
        status: 'Pending',
      },
      {
        id: 'TXN003',
        date: '2025-12-06',
        vehicle: 'KCD 789Z',
        amount: 6800,
        type: 'Payment',
        status: 'Completed',
      },
    ];
  }

  setDateRange() {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);
    this.dateRange = [lastWeek, today];
  }

  onDateRangeChange() {
    // TODO: Implement date range filter logic
    console.log('Date range changed:', this.dateRange);
  }

  exportData() {
    // TODO: Implement export functionality
    console.log('Exporting data...');
  }
}
