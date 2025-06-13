import React from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  BarChart2,
  TrendingUp 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import StatCard from '../components/common/StatCard';
import Card from '../components/common/Card';
import { 
  dailySalesData, 
  topProductsData, 
  categorySalesData, 
  customerTypeData 
} from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
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

const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  
  const COLORS = ['#1E40AF', '#0D9488', '#F59E0B', '#D97706', '#84CC16', '#7C3AED'];
  
  return (
    <div>
      <PageHeader 
        title={`Welcome, ${user?.name || 'Admin'}`}
        subtitle="Here's what's happening with your store today."
      />
      
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
          title="Total Customers"
          value="9,285"
          icon={<Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          change={5}
          changeText="from last month"
        />
        <StatCard
          title="Low Stock Items"
          value="5"
          icon={<Package className="h-6 w-6 text-red-600 dark:text-red-400" />}
          change={-2}
          changeText="from last month"
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <Card title="Revenue Trend" subtitle="Last 7 days">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dailySalesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                stroke="#9ca3af"
              />
              <YAxis 
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                stroke="#9ca3af"
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#1E40AF" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        
        {/* Top Products */}
        <Card title="Top Products" subtitle="By revenue share">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={topProductsData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={32}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis tickFormatter={(value) => `$${value/1000}k`} stroke="#9ca3af" />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
              <Bar
                dataKey="revenue"
                fill="#0D9488"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Sales */}
        <Card title="Category Performance" subtitle="Revenue by category">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categorySalesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="revenue"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                animationDuration={1500}
              >
                {categorySalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        
        {/* Customer Type */}
        <Card title="Customer Insights" subtitle="New vs. returning customers">
          <div className="flex flex-col h-full justify-center">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-800 mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">New Customers</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{customerTypeData[0].count.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-800 dark:bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${customerTypeData[0].percentage}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                {customerTypeData[0].percentage}%
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-600 mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Returning Customers</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{customerTypeData[1].count.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full" 
                  style={{ width: `${customerTypeData[1].percentage}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                {customerTypeData[1].percentage}%
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Customer retention rate is <span className="font-medium text-green-600 dark:text-green-400">65%</span>, which is <span className="font-medium text-green-600 dark:text-green-400">+5%</span> from last quarter
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;