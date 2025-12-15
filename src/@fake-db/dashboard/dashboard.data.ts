import { DashboardData } from './dashboard.model';

export class DashboardFakeData {
  static data: DashboardData = {
    stats: {
      totalAmountCollected: 6999837,
      totalBookingAmount: 14565,
      totalDirectPayment: 6985272,
      totalTransactions: 42063,
      changes: {
        totalAmountCollected: '+12.5%',
        totalBookingAmount: '+8.2%',
        totalDirectPayment: '+15.3%',
        totalTransactions: '+23.1%',
      },
    },

    lineChart: {
      labels: ['Nov 30', 'Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7'],
      data: [450000, 1200000, 1100000, 950000, 1250000, 1150000, 850000, 650000],
    },

    pieChart: {
      labels: ['SYSTEM', 'DRIVER', 'FUEL', 'MAINTENANCE'],
      data: [306994, 6183923, 150000, 350000],
    },

    recentTransactions: [
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
    ],
  };
}
