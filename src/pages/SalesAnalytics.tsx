import React, { useState } from 'react';
import { Calendar, Download, Filter, DollarSign, ShoppingCart } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import { 
  dailySalesData, 
  weeklySalesData, 
  monthlySalesData, 
  topProductsData 
} from '../data/mockData';
import { exportToCSV, formatSalesDataForExport } from '../utils/exportUtils';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SalesAnalytics: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  
  const getTimeframeData = () => {
    switch(timeframe) {
      case 'weekly':
        return weeklySalesData;
      case 'monthly':
        return monthlySalesData;
      case 'daily':
      default:
        return dailySalesData;
    }
  };
  
  const getXAxisLabel = () => {
    switch(timeframe) {
      case 'weekly':
        return 'week';
      case 'monthly':
        return 'month';
      case 'daily':
      default:
        return 'date';
    }
  };
  
  const formatXAxisTick = (value: string) => {
    if (timeframe === 'daily') {
      return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    return value;
  };

  const handleExport = () => {
    const dataToExport = formatSalesDataForExport(getTimeframeData(), timeframe);
    exportToCSV(dataToExport, `sales_analytics_${timeframe}`);
  };

  const handleDateRangeExport = () => {
    if (!dateRange.start || !dateRange.end) {
      alert('Please select both start and end dates');
      return;
    }
    
    // Filter data based on date range
    let filteredData = getTimeframeData();
    
    if (timeframe === 'daily') {
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      
      filteredData = dailySalesData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }
    
    const dataToExport = formatSalesDataForExport(filteredData, timeframe);
    exportToCSV(dataToExport, `sales_analytics_${timeframe}_${dateRange.start}_to_${dateRange.end}`);
  };
  
  return (
    <div>
      <PageHeader 
        title="Sales Analytics"
        subtitle="Analyze your sales performance over time"
        actions={
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Filter className="w-4 h-4" />}
              onClick={() => setShowFilters(!showFilters)}
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
              onClick={handleExport}
            >
              Export
            </Button>
          </div>
        }
      />

      {/* Filters Panel */}
      {showFilters && (
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                size="sm"
                onClick={handleDateRangeExport}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Export Filtered Data
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$602,450"
          icon={<DollarSign className="h-6 w-6 text-blue-800 dark:text-blue-400" />}
          change={12}
          changeText="from last month"
        />
        <StatCard
          title="Total Orders"
          value="4,890"
          icon={<ShoppingCart className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          change={8}
          changeText="from last month"
        />
        <StatCard
          title="Average Order Value"
          value="$123.20"
          icon={<DollarSign className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          change={3.5}
          changeText="from last month"
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={<ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-400" />}
          change={0.5}
          changeText="from last month"
        />
      </div>
      
      {/* Revenue Chart */}
      <Card 
        title="Revenue Trend"
        subtitle="View your revenue over time"
        className="mb-6"
      >
        <div className="mb-4 flex space-x-2">
          <Button
            variant={timeframe === 'daily' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setTimeframe('daily')}
          >
            Daily
          </Button>
          <Button
            variant={timeframe === 'weekly' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setTimeframe('weekly')}
          >
            Weekly
          </Button>
          <Button
            variant={timeframe === 'monthly' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setTimeframe('monthly')}
          >
            Monthly
          </Button>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={getTimeframeData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#1E40AF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey={getXAxisLabel()} 
              tickFormatter={formatXAxisTick}
              stroke="#9ca3af"
            />
            <YAxis 
              tickFormatter={(value) => `$${value/1000}k`}
              stroke="#9ca3af"
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
              labelFormatter={(label) => {
                if (timeframe === 'daily') {
                  return new Date(label).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
                }
                return label;
              }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#1E40AF" 
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
      
      {/* Orders Chart */}
      <Card 
        title="Order Volume"
        subtitle="Number of orders over time"
        className="mb-6"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={getTimeframeData()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey={getXAxisLabel()} 
              tickFormatter={formatXAxisTick}
              stroke="#9ca3af"
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Orders']}
              labelFormatter={(label) => {
                if (timeframe === 'daily') {
                  return new Date(label).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
                }
                return label;
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="orders" 
              stroke="#0D9488" 
              strokeWidth={2}
              dot={{ fill: '#0D9488', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      
      {/* Top Products */}
      <Card 
        title="Top Products"
        subtitle="Best selling products by revenue"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Share
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {topProductsData.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {product.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <span className="mr-2">{product.share}%</span>
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-800 dark:bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${product.share}%` }}
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

export default SalesAnalytics;