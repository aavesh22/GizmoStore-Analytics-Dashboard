// Mock Users
export const mockUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@gizmostore.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Manager User',
    email: 'manager@gizmostore.com',
    password: 'manager123',
    role: 'manager'
  }
];

// Mock Sales Data
export const dailySalesData = [
  { date: '2023-06-01', revenue: 15420, orders: 124 },
  { date: '2023-06-02', revenue: 18230, orders: 145 },
  { date: '2023-06-03', revenue: 16750, orders: 132 },
  { date: '2023-06-04', revenue: 19800, orders: 156 },
  { date: '2023-06-05', revenue: 22340, orders: 178 },
  { date: '2023-06-06', revenue: 21200, orders: 165 },
  { date: '2023-06-07', revenue: 25600, orders: 195 }
];

// Weekly Sales Data
export const weeklySalesData = [
  { week: 'Week 1', revenue: 108500, orders: 865 },
  { week: 'Week 2', revenue: 124700, orders: 980 },
  { week: 'Week 3', revenue: 132400, orders: 1045 },
  { week: 'Week 4', revenue: 142800, orders: 1120 }
];

// Monthly Sales Data
export const monthlySalesData = [
  { month: 'Jan', revenue: 452000, orders: 3640 },
  { month: 'Feb', revenue: 478000, orders: 3850 },
  { month: 'Mar', revenue: 512000, orders: 4120 },
  { month: 'Apr', revenue: 538000, orders: 4350 },
  { month: 'May', revenue: 585000, orders: 4720 },
  { month: 'Jun', revenue: 602000, orders: 4890 }
];

// Top Products
export const topProductsData = [
  { id: 1, name: 'iPhone 15 Pro', revenue: 156700, quantity: 145, share: 24 },
  { id: 2, name: 'Samsung Galaxy S23', revenue: 132500, quantity: 132, share: 20 },
  { id: 3, name: 'MacBook Pro M3', revenue: 98400, quantity: 56, share: 15 },
  { id: 4, name: 'Sony WH-1000XM5', revenue: 78200, quantity: 245, share: 12 },
  { id: 5, name: 'iPad Air', revenue: 65300, quantity: 112, share: 10 },
  { id: 6, name: 'Other Products', revenue: 124900, quantity: 432, share: 19 }
];

// Category Sales
export const categorySalesData = [
  { category: 'Smartphones', revenue: 285000, quantity: 580, share: 38 },
  { category: 'Laptops', revenue: 185000, quantity: 215, share: 25 },
  { category: 'Audio', revenue: 112000, quantity: 840, share: 15 },
  { category: 'Tablets', revenue: 85000, quantity: 320, share: 11 },
  { category: 'Accessories', revenue: 65000, quantity: 1250, share: 8 },
  { category: 'Other', revenue: 22000, quantity: 320, share: 3 }
];

// Customer Location Data
export const customerLocationData = [
  { city: 'New York', customers: 1240, revenue: 245000 },
  { city: 'Los Angeles', customers: 980, revenue: 185000 },
  { city: 'Chicago', customers: 860, revenue: 156000 },
  { city: 'Houston', customers: 720, revenue: 132000 },
  { city: 'Phoenix', customers: 580, revenue: 98000 },
  { city: 'Philadelphia', customers: 480, revenue: 84000 },
  { city: 'San Antonio', customers: 420, revenue: 76000 },
  { city: 'San Diego', customers: 380, revenue: 68000 },
  { city: 'Dallas', customers: 360, revenue: 64000 },
  { city: 'San Jose', customers: 320, revenue: 58000 }
];

// Customer Type Data
export const customerTypeData = [
  { type: 'New Customers', count: 3250, percentage: 35 },
  { type: 'Returning Customers', count: 6035, percentage: 65 }
];

// Inventory Data
export const inventoryData = [
  { id: 1, name: 'iPhone 15 Pro', category: 'Smartphones', stock: 45, threshold: 20, status: 'In Stock' },
  { id: 2, name: 'Samsung Galaxy S23', category: 'Smartphones', stock: 32, threshold: 15, status: 'In Stock' },
  { id: 3, name: 'MacBook Pro M3', category: 'Laptops', stock: 12, threshold: 10, status: 'Low Stock' },
  { id: 4, name: 'Sony WH-1000XM5', category: 'Audio', stock: 28, threshold: 25, status: 'Low Stock' },
  { id: 5, name: 'iPad Air', category: 'Tablets', stock: 18, threshold: 15, status: 'In Stock' },
  { id: 6, name: 'Dell XPS 13', category: 'Laptops', stock: 8, threshold: 10, status: 'Low Stock' },
  { id: 7, name: 'AirPods Pro', category: 'Audio', stock: 42, threshold: 30, status: 'In Stock' },
  { id: 8, name: 'Google Pixel 7', category: 'Smartphones', stock: 0, threshold: 15, status: 'Out of Stock' },
  { id: 9, name: 'Samsung Galaxy Tab S9', category: 'Tablets', stock: 14, threshold: 12, status: 'In Stock' },
  { id: 10, name: 'Bose QuietComfort', category: 'Audio', stock: 6, threshold: 15, status: 'Low Stock' },
  { id: 11, name: 'Apple Watch Series 9', category: 'Wearables', stock: 24, threshold: 20, status: 'In Stock' },
  { id: 12, name: 'Lenovo ThinkPad X1', category: 'Laptops', stock: 0, threshold: 8, status: 'Out of Stock' }
];