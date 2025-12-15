import {
  DashboardStats,
  DashboardChart,
  DashboardPie,
} from '../../@fake-db/dashboard/dashboard.model';

/* ============================
   Stats Cards Mapper
============================ */
export function mapStatsToCards(stats: DashboardStats) {
  return [
    {
      title: 'Total Amount Collected',
      value: formatCurrency(stats.totalAmountCollected),
      icon: 'pi-dollar',
      color: '#dc3545',
      change: stats.changes.totalAmountCollected,
    },
    {
      title: 'Total Booking Amount',
      value: formatCurrency(stats.totalBookingAmount),
      icon: 'pi-calendar',
      color: '#0d6efd',
      change: stats.changes.totalBookingAmount,
    },
    {
      title: 'Total Direct Payment',
      value: formatCurrency(stats.totalDirectPayment),
      icon: 'pi-credit-card',
      color: '#198754',
      change: stats.changes.totalDirectPayment,
    },
    {
      title: 'Total Transactions',
      value: stats.totalTransactions.toLocaleString(),
      icon: 'pi-chart-line',
      color: '#ffc107',
      change: stats.changes.totalTransactions,
    },
  ];
}

/* ============================
   Line Chart Builder
============================ */
export function buildLineChart(chart: DashboardChart) {
  return {
    labels: chart.labels,
    datasets: [
      {
        label: 'Sales Value (Ksh)',
        data: chart.data,
        fill: true,
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220, 53, 69, 0.1)',
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };
}

/* ============================
   Pie Chart Builder
============================ */
export function buildPieChart(pie: DashboardPie) {
  return {
    labels: pie.labels,
    datasets: [
      {
        data: pie.data,
        backgroundColor: ['#0d6efd', '#dc3545', '#ffc107', '#198754'],
        borderWidth: 0,
      },
    ],
  };
}

/* ============================
   Helpers
============================ */
function formatCurrency(value: number): string {
  return `Ksh ${value.toLocaleString()}.00`;
}

export function buildLineChartOptions() {
  return {
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
          callback: (value: number) => `Ksh ${value.toLocaleString()}`,
        },
      },
    },
  };
}

export function buildPieChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
}
