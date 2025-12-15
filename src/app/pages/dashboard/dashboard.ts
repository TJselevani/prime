// pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';
import { DataService } from '../../../@core/api/data.service';
import { API_ENDPOINTS } from '../../../@core/api/endpoints';
import { DashboardData, DashboardTransaction } from '../../../@fake-db/dashboard/dashboard.model';
import {
  buildLineChart,
  buildLineChartOptions,
  buildPieChart,
  buildPieChartOptions,
  mapStatsToCards,
} from '../../../@core/mappers/dashboard.mapper';
import { LoadingStore } from '../../../@core/state/loading.store';
import { ChangeDetectorRef } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    MatProgressSpinnerModule,
    ProgressSpinnerModule,
    CommonModule,
    FormsModule,
    CardModule,
    ChartModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    A11yModule,
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
  recentTransactions: DashboardTransaction[] = [];
  loading: any;

  constructor(
    private dataService: DataService,
    private loadingStore: LoadingStore,
    private cdr: ChangeDetectorRef
  ) {
    this.loading = this.loadingStore.loading;
  }

  ngOnInit(): void {
    this.setDateRange();
    this.loadingStore.start();

    this.dataService.get<DashboardData>(API_ENDPOINTS.DASHBOARD).subscribe({
      next: (data) => {
        this.chartData = buildLineChart(data.lineChart);
        this.chartOptions = buildLineChartOptions();
        this.pieChartData = buildPieChart(data.pieChart);
        this.pieChartOptions = buildPieChartOptions();
        this.statsCards = mapStatsToCards(data.stats);
        this.recentTransactions = data.recentTransactions;
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loadingStore.stop();
      },
    });
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
