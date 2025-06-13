import React, { useState } from 'react';
import { PieChart, BarChart2, TrendingUp, Filter, Download, Calendar } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import { categorySalesData } from '../data/mockData';
import {
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const CategoryAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'month' | 'quarter' | 'year'>('month');
  const [selectedView, setSelectedView] = useState<'revenue' | 'quantity'>('revenue');
  
  // Colors for the charts
  const COLORS = ['#1E40AF', '#0D9488', '#F59E0B', '#D97706', '#84CC16', '#7C3AED'];
  
  // Mock data for category trends over time
  const categoryTrendData = [
    { month: 'Jan', Smartphones: 42000, Laptops: 28000, Audio: 15000, Tablets: 12000, Accessories: 8000 },
    { month: 'Feb', Smartphones: 44000, Laptops: 29000, Audio: 16000, Tablets: 13000, Accessories: 8500 },
    { month: 'Mar', Smartphones: 45000, Laptops: 30000, Audio: 17000, Tablets: 14000, Accessories: 9000 },
    { month: 'Apr', Smartphones: 47000, Laptops: 31000, Audio: 18000, Tablets: 14500, Accessories: 9500 },
    { month: 'May', Smartphones: 50000, Laptops: 33000, Audio: 20000, Tablets: 15000, Accessories: 10000 },
    { month: 'Jun', Smartphones: 57000, Laptops: 37000, Audio: 22000, Tablets: 17000, Accessories: 13000 }
  ];
  
  // Calculate total revenue and quantities
  const totalRevenue = categorySalesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalQuantity = categorySalesData.reduce((sum, item) => sum + item.quantity, 0);
  
  // Helper function to format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Sort categories by revenue or quantity based on selected view
  const getSortedCategories = () => {
    return [...categorySalesData].sort((a, b) => {
      if (selectedView === 'revenue') {
        return b.revenue - a.revenue;
      }
      return b.quantity - a.quantity;
    });
  };
  
  return (
    <div>
      <PageHeader
        title="Category Analytics"
        subtitle="Analyze product category performance and trends"
        actions={
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Filter className="w-4 h-4" />}
            >
              Filter
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Date Range
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
            >
              Export
            </Button>
          </div>
        }
      />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Category Revenue"
          value={formatCurrency(totalRevenue)}
          icon={<PieChart className="h-6 w-6 text-blue-800 dark:text-blue-400" />}
          change={8}
          changeText="from last month"
        />
        <StatCard
          title="Top Category"
          value="Smartphones"
          icon={<TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          change={5}
          changeText="market share growth"
        />
        <StatCard
          title="Fastest Growing"
          value="Audio"
          icon={<TrendingUp className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          change={12}
          changeText="growth rate"
        />
        <StatCard
          title="Total Units Sold"
          value={totalQuantity.toLocaleString()}
          icon={<BarChart2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
          change={7}
          changeText="from last month"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Category Distribution Chart */}
        <Card title="Category Distribution" subtitle="Revenue share by product category">
          <div className="mb-4 flex space-x-2">
            <Button
              variant={selectedView === 'revenue' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedView('revenue')}
            >
              Revenue
            </Button>
            <Button
              variant={selectedView === 'quantity' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedView('quantity')}
            >
              Quantity
            </Button>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={categorySalesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey={selectedView === 'revenue' ? 'revenue' : 'quantity'}
                nameKey="category"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                animationDuration={1000}
              >
                {categorySalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => {
                  if (selectedView === 'revenue') {
                    return [formatCurrency(value), 'Revenue'];
                  }
                  return [value.toLocaleString(), 'Units Sold'];
                }}
              />
              <Legend />
            </RechartsPieChart>
          </ResponsiveContainer>
        </Card>
        
        {/* Category Comparison Chart */}
        <Card title="Category Comparison" subtitle="Side-by-side comparison of categories">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={categorySalesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={32}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="category" stroke="#9ca3af" />
              <YAxis 
                tickFormatter={(value) => selectedView === 'revenue' ? `$${value/1000}k` : value.toLocaleString()}
                stroke="#9ca3af" 
              />
              <Tooltip 
                formatter={(value: number) => {
                  if (selectedView === 'revenue') {
                    return [formatCurrency(value), 'Revenue'];
                  }
                  return [value.toLocaleString(), 'Units Sold'];
                }}
              />
              <Legend />
              <Bar
                dataKey={selectedView === 'revenue' ? 'revenue' : 'quantity'}
                name={selectedView === 'revenue' ? 'Revenue' : 'Units Sold'}
                fill="#0D9488"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      
      {/* Category Trends Over Time */}
      <Card 
        title="Category Trends" 
        subtitle="Performance trends over time"
        className="mb-6"
      >
        <div className="mb-4 flex space-x-2">
          <Button
            variant={selectedTimeframe === 'month' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('month')}
          >
            Monthly
          </Button>
          <Button
            variant={selectedTimeframe === 'quarter' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('quarter')}
          >
            Quarterly
          </Button>
          <Button
            variant={selectedTimeframe === 'year' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('year')}
          >
            Yearly
          </Button>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={categoryTrendData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis 
              tickFormatter={(value) => `$${value/1000}k`}
              stroke="#9ca3af"
            />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), '']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Smartphones" 
              stroke="#1E40AF" 
              strokeWidth={2}
              dot={{ fill: '#1E40AF', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              animationDuration={1000}
            />
            <Line 
              type="monotone" 
              dataKey="Laptops" 
              stroke="#0D9488" 
              strokeWidth={2}
              dot={{ fill: '#0D9488', strokeWidth: 2 }}
              activationDot={{ r: 8 }}
              animationDuration={1000}
            />
            <Line 
              type="monotone" 
              dataKey="Audio" 
              stroke="#F59E0B" 
              strokeWidth={2}
              dot={{ fill: '#F59E0B', strokeWidth: 2 }}
              activationDot={{ r: 8 }}
              animationDuration={1000}
            />
            <Line 
              type="monotone" 
              dataKey="Tablets" 
              stroke="#84CC16" 
              strokeWidth={2}
              dot={{ fill: '#84CC16', strokeWidth: 2 }}
              activationDot={{ r: 8 }}
              animationDuration={1000}
            />
            <Line 
              type="monotone" 
              dataKey="Accessories" 
              stroke="#7C3AED" 
              strokeWidth={2}
              dot={{ fill: '#7C3AED', strokeWidth: 2 }}
              activationDot={{ r: 8 }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      
      {/* Category Details Table */}
      <Card title="Category Details" subtitle="Detailed breakdown of each category">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Units Sold
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg. Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Share
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {getSortedCategories().map((category, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {category.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {formatCurrency(category.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {category.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {formatCurrency(category.revenue / category.quantity)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <span className="mr-2">{category.share}%</span>
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-800 dark:bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${category.share}%` }}
                        ></div>
                      </div>
                    </div>
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

export default CategoryAnalytics;