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

// Quarterly Sales Data
export const quarterlySalesData = [
  { quarter: 'Q1 2023', revenue: 1442000, orders: 11610 },
  { quarter: 'Q2 2023', revenue: 1725000, orders: 13960 },
  { quarter: 'Q3 2023', revenue: 1890000, orders: 15240 },
  { quarter: 'Q4 2023', revenue: 2100000, orders: 16890 }
];

// Yearly Sales Data
export const yearlySalesData = [
  { year: '2020', revenue: 4200000, orders: 33800 },
  { year: '2021', revenue: 5100000, orders: 41200 },
  { year: '2022', revenue: 6300000, orders: 50800 },
  { year: '2023', revenue: 7157000, orders: 57700 }
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

// Category trends data for different timeframes
export const categoryTrendDataMonthly = [
  { month: 'Jan', Smartphones: 42000, Laptops: 28000, Audio: 15000, Tablets: 12000, Accessories: 8000 },
  { month: 'Feb', Smartphones: 44000, Laptops: 29000, Audio: 16000, Tablets: 13000, Accessories: 8500 },
  { month: 'Mar', Smartphones: 45000, Laptops: 30000, Audio: 17000, Tablets: 14000, Accessories: 9000 },
  { month: 'Apr', Smartphones: 47000, Laptops: 31000, Audio: 18000, Tablets: 14500, Accessories: 9500 },
  { month: 'May', Smartphones: 50000, Laptops: 33000, Audio: 20000, Tablets: 15000, Accessories: 10000 },
  { month: 'Jun', Smartphones: 57000, Laptops: 37000, Audio: 22000, Tablets: 17000, Accessories: 13000 }
];

export const categoryTrendDataQuarterly = [
  { quarter: 'Q1 2023', Smartphones: 131000, Laptops: 87000, Audio: 48000, Tablets: 39000, Accessories: 25500 },
  { quarter: 'Q2 2023', Smartphones: 154000, Laptops: 101000, Audio: 60000, Tablets: 46500, Accessories: 32500 },
  { quarter: 'Q3 2023', Smartphones: 168000, Laptops: 110000, Audio: 65000, Tablets: 52000, Accessories: 38000 },
  { quarter: 'Q4 2023', Smartphones: 185000, Laptops: 125000, Audio: 72000, Tablets: 58000, Accessories: 42000 }
];

export const categoryTrendDataYearly = [
  { year: '2020', Smartphones: 520000, Laptops: 340000, Audio: 180000, Tablets: 150000, Accessories: 95000 },
  { year: '2021', Smartphones: 580000, Laptops: 385000, Audio: 210000, Tablets: 175000, Accessories: 115000 },
  { year: '2022', Smartphones: 640000, Laptops: 420000, Audio: 235000, Tablets: 190000, Accessories: 130000 },
  { year: '2023', Smartphones: 698000, Laptops: 423000, Audio: 245000, Tablets: 195500, Accessories: 138000 }
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

// Search data for global search functionality
export const searchableData = [
  // Products
  ...inventoryData.map(item => ({
    id: `product-${item.id}`,
    type: 'product',
    title: item.name,
    category: item.category,
    description: `${item.category} - Stock: ${item.stock}`,
    url: '/dashboard/inventory'
  })),
  
  // Customers (sample data)
  ...customerLocationData.map((item, index) => ({
    id: `customer-${index}`,
    type: 'customer',
    title: `Customers in ${item.city}`,
    category: 'Customer Location',
    description: `${item.customers} customers, $${item.revenue.toLocaleString()} revenue`,
    url: '/dashboard/customers'
  })),
  
  // Categories
  ...categorySalesData.map((item, index) => ({
    id: `category-${index}`,
    type: 'category',
    title: item.category,
    category: 'Product Category',
    description: `$${item.revenue.toLocaleString()} revenue, ${item.quantity} units sold`,
    url: '/dashboard/categories'
  })),
  
  // Orders (sample data)
  { id: 'order-1', type: 'order', title: 'Order #12345', category: 'Recent Order', description: 'iPhone 15 Pro - $1,199', url: '/dashboard/sales' },
  { id: 'order-2', type: 'order', title: 'Order #12346', category: 'Recent Order', description: 'MacBook Pro M3 - $2,499', url: '/dashboard/sales' },
  { id: 'order-3', type: 'order', title: 'Order #12347', category: 'Recent Order', description: 'Sony WH-1000XM5 - $399', url: '/dashboard/sales' }
];