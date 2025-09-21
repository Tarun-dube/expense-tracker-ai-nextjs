'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
  category: string;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  // Aggregate expenses by date
  const aggregateByDate = (records: Record[]) => {
    const dateMap = new Map<
      string,
      { total: number; categories: string[]; originalDate: string }
    >();

    records.forEach((record) => {
      const dateObj = new Date(record.date);
      const year = dateObj.getUTCFullYear();
      const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getUTCDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;
      const existing = dateMap.get(dateKey);

      if (existing) {
        existing.total += record.amount;
        if (!existing.categories.includes(record.category)) {
          existing.categories.push(record.category);
        }
      } else {
        dateMap.set(dateKey, {
          total: record.amount,
          categories: [record.category],
          originalDate: record.date,
        });
      }
    });

    return Array.from(dateMap.entries())
      .map(([date, data]) => ({
        date,
        amount: data.total,
        categories: data.categories,
        originalDate: data.originalDate,
      }))
      .sort(
        (a, b) =>
          new Date(a.originalDate).getTime() -
          new Date(b.originalDate).getTime()
      );
  };

  const aggregatedData = aggregateByDate(records);

  // Blueish theme
  const getAmountColor = (amount: number) => {
    if (amount > 200)
      return {
        bg: isDark ? 'rgba(30, 58, 138, 0.4)' : 'rgba(37, 99, 235, 0.4)',
        border: isDark ? 'rgba(96, 165, 250, 1)' : 'rgba(37, 99, 235, 1)',
      };
    if (amount > 100)
      return {
        bg: isDark ? 'rgba(30, 64, 175, 0.3)' : 'rgba(59, 130, 246, 0.3)',
        border: isDark ? 'rgba(147, 197, 253, 1)' : 'rgba(59, 130, 246, 1)',
      };
    if (amount > 50)
      return {
        bg: isDark ? 'rgba(29, 78, 216, 0.25)' : 'rgba(96, 165, 250, 0.25)',
        border: isDark ? 'rgba(191, 219, 254, 1)' : 'rgba(96, 165, 250, 1)',
      };
    return {
      bg: isDark ? 'rgba(37, 99, 235, 0.2)' : 'rgba(147, 197, 253, 0.2)',
      border: isDark ? 'rgba(219, 234, 254, 1)' : 'rgba(147, 197, 253, 1)',
    };
  };

  const data = {
    labels: aggregatedData.map((item) => {
      const [, month, day] = item.date.split('-');
      return `${month}/${day}`;
    }),
    datasets: [
      {
        data: aggregatedData.map((item) => item.amount),
        backgroundColor: aggregatedData.map(
          (item) => getAmountColor(item.amount).bg
        ),
        borderColor: aggregatedData.map(
          (item) => getAmountColor(item.amount).border
        ),
        borderWidth: 1.5,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: isDark
          ? 'rgba(17, 24, 39, 0.95)'
          : 'rgba(255, 255, 255, 0.95)',
        titleColor: isDark ? '#f9fafb' : '#1f2937',
        bodyColor: isDark ? '#d1d5db' : '#374151',
        borderColor: isDark ? '#1e3a8a' : '#bfdbfe',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context: { dataIndex: number }) {
            const dataIndex = context.dataIndex;
            const item = aggregatedData[dataIndex];
            const categoriesText =
              item.categories.length > 1
                ? `Categories: ${item.categories.join(', ')}`
                : `Category: ${item.categories[0]}`;
            return [`Total: ₹${item.amount.toFixed(2)}`, categoriesText];
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: { size: isMobile ? 12 : 14, weight: 'bold' as const },
          color: isDark ? '#bfdbfe' : '#1e3a8a',
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: isDark ? '#93c5fd' : '#2563eb',
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0,
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (₹)',
          font: { size: isMobile ? 12 : 16, weight: 'bold' as const },
          color: isDark ? '#bfdbfe' : '#1e3a8a',
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: isDark ? '#93c5fd' : '#2563eb',
          callback: function (value: string | number) {
            return '₹' + value;
          },
        },
        grid: { color: isDark ? '#1e3a8a' : '#e0f2fe' },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
