import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import { Menu } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-20 transition-opacity ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-gray-600 dark:bg-gray-900 opacity-75" 
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className={`transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 overflow-y-auto border-r border-gray-200 dark:border-gray-800`}>
          <Sidebar />
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64">
          <Sidebar />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="md:hidden">
          <div className="bg-white dark:bg-gray-900 px-4 py-3 flex items-center shadow-sm border-b border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setSidebarOpen(true)}
              className="mr-4 text-gray-500 dark:text-gray-400 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-800 dark:bg-blue-700 rounded flex items-center justify-center text-white font-bold">G</div>
              <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">GizmoStore</span>
            </div>
          </div>
        </div>
        
        <Header />
        
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;