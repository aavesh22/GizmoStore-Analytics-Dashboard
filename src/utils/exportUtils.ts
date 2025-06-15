// Utility functions for exporting data to CSV

export const exportToCSV = (data: any[], filename: string) => {
  if (!data || data.length === 0) {
    alert('No data to export');
    return;
  }

  // Get headers from the first object
  const headers = Object.keys(data[0]);
  
  // Create CSV content
  const csvContent = [
    headers.join(','), // Header row
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Handle values that might contain commas or quotes
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(',')
    )
  ].join('\n');

  // Create and download the file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

export const formatSalesDataForExport = (data: any[], timeframe: string) => {
  return data.map(item => ({
    Date: timeframe === 'daily' ? new Date(item.date).toLocaleDateString() : item[timeframe === 'weekly' ? 'week' : 'month'],
    Revenue: `₹${item.revenue.toLocaleString()}`,
    Orders: item.orders.toLocaleString(),
    'Average Order Value': `₹${(item.revenue / item.orders).toFixed(2)}`
  }));
};

export const formatCategoryDataForExport = (data: any[]) => {
  return data.map(item => ({
    Category: item.category,
    Revenue: `₹${item.revenue.toLocaleString()}`,
    'Units Sold': item.quantity.toLocaleString(),
    'Market Share': `${item.share}%`,
    'Average Price': `₹${(item.revenue / item.quantity).toFixed(2)}`
  }));
};

export const formatCustomerDataForExport = (data: any[]) => {
  return data.map(item => ({
    City: item.city,
    Customers: item.customers.toLocaleString(),
    Revenue: `₹${item.revenue.toLocaleString()}`,
    'Average Revenue per Customer': `₹${(item.revenue / item.customers).toFixed(2)}`
  }));
};

export const formatInventoryDataForExport = (data: any[]) => {
  return data.map(item => ({
    Product: item.name,
    Category: item.category,
    'Current Stock': item.stock,
    'Stock Threshold': item.threshold,
    Status: item.status
  }));
};