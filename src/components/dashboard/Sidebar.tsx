import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  PieChart, 
  Users, 
  Package, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { logout, user } = useAuth();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Sales Analytics', path: '/dashboard/sales', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Category Analysis', path: '/dashboard/categories', icon: <PieChart className="w-5 h-5" /> },
    { name: 'Customer Insights', path: '/dashboard/customers', icon: <Users className="w-5 h-5" /> },
    { name: 'Inventory', path: '/dashboard/inventory', icon: <Package className="w-5 h-5" /> },
  ];

  // New Analytics icon component based on the provided image
  const AnalyticsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mobile device outline */}
      <rect x="8" y="4" width="16" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      {/* Top speaker */}
      <rect x="12" y="6" width="8" height="1" rx="0.5" fill="currentColor"/>
      {/* Home button */}
      <circle cx="16" cy="25" r="1" fill="currentColor"/>
      
      {/* Chart bars inside */}
      <rect x="10" y="16" width="2" height="6" fill="#22D3EE" rx="1"/>
      <rect x="13" y="14" width="2" height="8" fill="#22D3EE" rx="1"/>
      <rect x="16" y="12" width="2" height="10" fill="#FF8C00" rx="1"/>
      <rect x="19" y="15" width="2" height="7" fill="#22D3EE" rx="1"/>
      
      {/* Pie chart */}
      <circle cx="24" cy="8" r="4" stroke="#84CC16" strokeWidth="2" fill="none"/>
      <path d="M24 4 A4 4 0 0 1 28 8 L24 8 Z" fill="#FF8C00"/>
      
      {/* Connection lines */}
      <path d="M20 8 L22 10" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="6" cy="18" r="1.5" fill="currentColor"/>
      <path d="M7.5 12 L8 12" stroke="currentColor" strokeWidth="2"/>
      <path d="M7.5 18 L8 18" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="fixed h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-10 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
              <AnalyticsIcon />
            </div>
            <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white">GizmoStore</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto py-6 px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}
                `}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>
          
          <div className="mt-10">
            <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Settings
            </p>
            <div className="mt-3 space-y-1">
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) => `
                  w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}
                `}
              >
                <Settings className="mr-3 w-5 h-5" />
                Settings
              </NavLink>
              <NavLink
                to="/dashboard/help"
                className={({ isActive }) => `
                  w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}
                `}
              >
                <HelpCircle className="mr-3 w-5 h-5" />
                Help & Support
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full flex items-center justify-center font-medium text-sm">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.name || 'User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user?.role || 'Admin'}
              </p>
            </div>
            <button 
              onClick={logout}
              className="ml-2 p-1 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              title="Log out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;