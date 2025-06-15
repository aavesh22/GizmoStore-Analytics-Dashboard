import React, { useState } from 'react';
import { Users, MapPin, UserPlus, UserCheck, Download } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import { customerLocationData, customerTypeData } from '../data/mockData';
import { exportToCSV, formatCustomerDataForExport } from '../utils/exportUtils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const CustomerInsights: React.FC = () => {
  const COLORS = ['#1E40AF', '#0D9488', '#F59E0B', '#D97706', '#84CC16', '#7C3AED'];
  
  // Helper function to format currency in INR
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const handleExport = () => {
    const dataToExport = formatCustomerDataForExport(customerLocationData);
    exportToCSV(dataToExport, 'customer_insights');
  };

  return (
    <div>
      <PageHeader 
        title="Customer Insights"
        subtitle="Analyze customer behavior and demographics"
        actions={
          <Button
            variant="primary"
            size="sm"
            leftIcon={<Download className="w-4 h-4" />}
            onClick={handleExport}
          >
            Export Report
          </Button>
        }
      />
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Customers"
          value="9,285"
          icon={<Users className="h-6 w-6 text-blue-800 dark:text-blue-400" />}
          change={15}
          changeText="from last month"
        />
        <StatCard
          title="New Customers"
          value="3,250"
          icon={<UserPlus className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          change={8}
          changeText="from last month"
        />
        <StatCard
          title="Returning Rate"
          value="65%"
          icon={<UserCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          change={5}
          changeText="from last month"
        />
        <StatCard
          title="Active Cities"
          value="42"
          icon={<MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />}
          change={2}
          changeText="from last month"
        />
      </div>
      
      {/* Customer Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Customer Type Distribution" subtitle="New vs Returning Customers">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="count"
                label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
              >
                {customerTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Customers']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        
        <Card title="Top Customer Locations" subtitle="Revenue by city">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={customerLocationData.slice(0, 5)}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={32}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="city" stroke="#9ca3af" />
              <YAxis tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`} stroke="#9ca3af" />
              <Tooltip formatter={(value) => [formatCurrency(value), 'Revenue']} />
              <Legend />
              <Bar dataKey="revenue" fill="#1E40AF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      
      {/* Customer Locations Table */}
      <Card title="Customer Locations" subtitle="Detailed view of customer distribution">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customers
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg. Revenue/Customer
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {customerLocationData.map((location, index) => (
                <tr key={location.city} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {location.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {location.customers.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {formatCurrency(location.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {formatCurrency(location.revenue / location.customers)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomerInsights;