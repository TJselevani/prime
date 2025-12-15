export interface DashboardStats {
  totalAmountCollected: number;
  totalBookingAmount: number;
  totalDirectPayment: number;
  totalTransactions: number;
  changes: {
    totalAmountCollected: string;
    totalBookingAmount: string;
    totalDirectPayment: string;
    totalTransactions: string;
  };
}

export interface DashboardChart {
  labels: string[];
  data: number[];
}

export interface DashboardPie {
  labels: string[];
  data: number[];
}

export interface DashboardTransaction {
  id: string;
  date: string;
  vehicle: string;
  amount: number;
  type: 'Payment' | 'Booking';
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface DashboardData {
  stats: DashboardStats;
  lineChart: DashboardChart;
  pieChart: DashboardPie;
  recentTransactions: DashboardTransaction[];
}
