import React, { ReactNode } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: number;
  changeText?: string;
  changeTimeframe?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeText,
  changeTimeframe = 'from last period',
  className = '',
}) => {
  const isPositive = change !== undefined ? change >= 0 : undefined;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-md ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
          
          {(change !== undefined || changeText) && (
            <div className="mt-2 flex items-center">
              {change !== undefined && (
                <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {isPositive ? (
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(change)}%
                </span>
              )}
              
              {changeText && (
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  {changeText || changeTimeframe}
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;