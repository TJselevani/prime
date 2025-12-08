import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { StatsComponent } from './pages/dashboard/stats/stats';
import { ReportsComponent } from './pages/dashboard/reports/reports';
import { DailyAnalysisComponent } from './pages/vehicle-analysis/daily/daily';
import { WeeklyAnalysisComponent } from './pages/vehicle-analysis/weekly/weekly';
import { MonthlyAnalysisComponent } from './pages/vehicle-analysis/monthly/monthly';
import { YearlyAnalysisComponent } from './pages/vehicle-analysis/yearly/yearly';
import { ShortTermPredictionComponent } from './pages/prediction/short-term/short-term';
import { PredictionTrendsComponent } from './pages/prediction/trends/trends';
import { LongTermPredictionComponent } from './pages/prediction/long-term/long-term';
import { CompletedTransactionsComponent } from './pages/transactions/completed/completed';
import { FailedTransactionsComponent } from './pages/transactions/failed/failed';
import { PendingTransactionsComponent } from './pages/transactions/pending/pending';
import { TransactionsComponent } from './pages/transactions/all/all';
import { RevenueComponent } from './pages/revenue/all/all';
import { RevenueByVehicleComponent } from './pages/revenue/by-vehicle/by-vehicle';
import { RevenueByLocationComponent } from './pages/revenue/by-location/by-location';
import { AllVehiclesComponent } from './pages/vehicles/all/all';
import { ActiveVehiclesComponent } from './pages/vehicles/active/active';
import { InactiveVehiclesComponent } from './pages/vehicles/inactive/inactive';
import { MaintenanceVehiclesComponent } from './pages/vehicles/maintenance/maintenance';
import { DriversComponent } from './pages/users/drivers/drivers';
import { CustomersComponent } from './pages/users/customers/customers';
import { AdminUserComponent } from './pages/users/admin/admin';
import { LocationsComponent } from './pages/locations/locations';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard/home', component: DashboardComponent },
      { path: 'dashboard/stats', component: StatsComponent },
      { path: 'dashboard/reports', component: ReportsComponent },

      { path: 'locations', component: LocationsComponent },

      { path: 'vehicles/all', component: AllVehiclesComponent },
      { path: 'vehicles/active', component: ActiveVehiclesComponent },
      { path: 'vehicles/inactive', component: InactiveVehiclesComponent },
      { path: 'vehicles/maintenance', component: MaintenanceVehiclesComponent },

      { path: 'vehicle-analysis/daily', component: DailyAnalysisComponent },
      { path: 'vehicle-analysis/weekly', component: WeeklyAnalysisComponent },
      { path: 'vehicle-analysis/monthly', component: MonthlyAnalysisComponent },
      { path: 'vehicle-analysis/yearly', component: YearlyAnalysisComponent },

      { path: 'prediction/short-term', component: ShortTermPredictionComponent },
      { path: 'prediction/long-term', component: LongTermPredictionComponent },
      { path: 'prediction/trends', component: PredictionTrendsComponent },

      { path: 'revenue/all', component: RevenueComponent },
      { path: 'revenue/by-vehicle', component: RevenueByVehicleComponent },
      { path: 'revenue/by-location', component: RevenueByLocationComponent },

      { path: 'transactions/all', component: TransactionsComponent },
      { path: 'transactions/completed', component: CompletedTransactionsComponent },
      { path: 'transactions/failed', component: FailedTransactionsComponent },
      { path: 'transactions/pending', component: PendingTransactionsComponent },

      { path: 'users/all', component: AdminUserComponent },
      { path: 'users/drivers', component: DriversComponent },
      { path: 'users/customers', component: CustomersComponent },

      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '/dashboard/home' },
];
