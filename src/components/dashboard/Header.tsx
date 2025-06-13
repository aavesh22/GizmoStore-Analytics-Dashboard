import React from 'react';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1 sm:max-w-xs">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm placeholder-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        
        <button 
          onClick={toggleTheme}
          className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
        
        <div className="flex items-center">
          <div className="text-sm text-right mr-3">
            <div className="font-medium text-gray-900 dark:text-white">Today</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;