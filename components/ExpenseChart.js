import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseChart = ({ jsonData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (jsonData) {
      // Destroy the previous chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const data = {
        labels: [],
        datasets: [
          {
            label: 'Total Expenses',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      jsonData.expenses.forEach((category) => {
        data.labels.push(category.category);
        const totalAmount = category.items.reduce((sum, item) => sum + item.amount, 0);
        data.datasets[0].data.push(totalAmount);
      });

      const ctx = document.getElementById('expenseChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Total Expense (in Currency)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Expense Category',
              },
            },
          },
        },
      });
    }
  }, [jsonData]);

  return (
    <div className="w-full">
      <canvas id="expenseChart" width="400" height="200"></canvas>
    </div>
  );
};

export default ExpenseChart;
