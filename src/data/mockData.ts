// Mock Users
export const mockUsers = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@gizmostore.com',
    password: 'admin@123',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Manager',
    email: 'manager@gizmostore.com',
    password: 'manager@123',
    role: 'manager'
  }
];

// Mock Sales Data (Updated to INR)
export const dailySalesData = [
  { date: '2023-06-01', revenue: 1285020, orders: 124 },
  { date: '2023-06-02', revenue: 1519230, orders: 145 },
  { date: '2023-06-03', revenue: 1396750, orders: 132 },
  { date: '2023-06-04', revenue: 1649800, orders: 156 },
  { date: '2023-06-05', revenue: 1862340, orders: 178 },
  { date: '2023-06-06', revenue: 1766200, orders: 165 },
  { date: '2023-06-07', revenue: 2134600, orders: 195 }
];

// Weekly Sales Data (Updated to INR)
export const weeklySalesData = [
  { week: 'Week 1', revenue: 9041500, orders: 865 },
  { week: 'Week 2', revenue: 10391700, orders: 980 },
  { week: 'Week 3', revenue: 11033400, orders: 1045 },
  { week: 'Week 4', revenue: 11903400, orders: 1120 }
];

// Monthly Sales Data (Updated to INR)
export const monthlySalesData = [
  { month: 'Jan', revenue: 37684000, orders: 3640 },
  { month: 'Feb', revenue: 39848000, orders: 3850 },
  { month: 'Mar', revenue: 42700000, orders: 4120 },
  { month: 'Apr', revenue: 44868000, orders: 4350 },
  { month: 'May', revenue: 48785000, orders: 4720 },
  { month: 'Jun', revenue: 50167000, orders: 4890 }
];

// Quarterly Sales Data (Updated to INR)
export const quarterlySalesData = [
  { quarter: 'Q1 2023', revenue: 120232000, orders: 11610 },
  { quarter: 'Q2 2023', revenue: 143820000, orders: 13960 },
  { quarter: 'Q3 2023', revenue: 157590000, orders: 15240 },
  { quarter: 'Q4 2023', revenue: 175140000, orders: 16890 }
];

// Yearly Sales Data (Updated to INR)
export const yearlySalesData = [
  { year: '2020', revenue: 350280000, orders: 33800 },
  { year: '2021', revenue: 425340000, orders: 41200 },
  { year: '2022', revenue: 525420000, orders: 50800 },
  { year: '2023', revenue: 596782000, orders: 57700 }
];

// Top Products (Updated to INR)
export const topProductsData = [
  { id: 1, name: 'iPhone 15 Pro', revenue: 13058700, quantity: 145, share: 24 },
  { id: 2, name: 'Samsung Galaxy S23', revenue: 11048500, quantity: 132, share: 20 },
  { id: 3, name: 'MacBook Pro M3', revenue: 8200400, quantity: 56, share: 15 },
  { id: 4, name: 'Sony WH-1000XM5', revenue: 6518200, quantity: 245, share: 12 },
  { id: 5, name: 'iPad Air', revenue: 5442300, quantity: 112, share: 10 },
  { id: 6, name: 'Other Products', revenue: 10408900, quantity: 432, share: 19 }
];

// Category Sales (Updated to INR)
export const categorySalesData = [
  { category: 'Smartphones', revenue: 23775000, quantity: 580, share: 38 },
  { category: 'Laptops', revenue: 15425000, quantity: 215, share: 25 },
  { category: 'Audio', revenue: 9340000, quantity: 840, share: 15 },
  { category: 'Tablets', revenue: 7085000, quantity: 320, share: 11 },
  { category: 'Accessories', revenue: 5421000, quantity: 1250, share: 8 },
  { category: 'Other', revenue: 1834000, quantity: 320, share: 3 }
];

// Category trends data for different timeframes (Updated to INR)
export const categoryTrendDataMonthly = [
  { month: 'Jan', Smartphones: 3502000, Laptops: 2334000, Audio: 1251000, Tablets: 1000200, Accessories: 667600 },
  { month: 'Feb', Smartphones: 3668000, Laptops: 2417600, Audio: 1334400, Tablets: 1084200, Accessories: 708500 },
  { month: 'Mar', Smartphones: 3753000, Laptops: 2502000, Audio: 1417800, Tablets: 1167600, Accessories: 751000 },
  { month: 'Apr', Smartphones: 3919000, Laptops: 2585400, Audio: 1501200, Tablets: 1209150, Accessories: 792500 },
  { month: 'May', Smartphones: 4170000, Laptops: 2752200, Audio: 1668000, Tablets: 1251000, Accessories: 834000 },
  { month: 'Jun', Smartphones: 4753000, Laptops: 3086200, Audio: 1835400, Tablets: 1418200, Accessories: 1084200 }
];

export const categoryTrendDataQuarterly = [
  { quarter: 'Q1 2023', Smartphones: 10923000, Laptops: 7253600, Audio: 4003200, Tablets: 3252000, Accessories: 2127100 },
  { quarter: 'Q2 2023', Smartphones: 12842000, Laptops: 8423800, Audio: 5004600, Tablets: 3878350, Accessories: 2710700 },
  { quarter: 'Q3 2023', Smartphones: 14006400, Laptops: 9171600, Audio: 5421000, Tablets: 4336800, Accessories: 3170800 },
  { quarter: 'Q4 2023', Smartphones: 15429000, Laptops: 10425000, Audio: 6003600, Tablets: 4836600, Accessories: 3502800 }
];

export const categoryTrendDataYearly = [
  { year: '2020', Smartphones: 43368000, Laptops: 28356000, Audio: 15012000, Tablets: 12510000, Accessories: 7923000 },
  { year: '2021', Smartphones: 48372000, Laptops: 32109000, Audio: 17514000, Tablets: 14595000, Accessories: 9585000 },
  { year: '2022', Smartphones: 53352000, Laptops: 35028000, Audio: 19599000, Tablets: 15846000, Accessories: 10842000 },
  { year: '2023', Smartphones: 58200400, Laptops: 35274000, Audio: 20432200, Tablets: 16303650, Accessories: 11511600 }
];

// Customer Location Data (Updated to INR)
export const customerLocationData = [
  { city: 'Mumbai', customers: 1240, revenue: 20421000 },
  { city: 'Delhi', customers: 980, revenue: 15429000 },
  { city: 'Bangalore', customers: 860, revenue: 13006800 },
  { city: 'Chennai', customers: 720, revenue: 11006400 },
  { city: 'Hyderabad', customers: 580, revenue: 8173200 },
  { city: 'Pune', customers: 480, revenue: 7003200 },
  { city: 'Kolkata', customers: 420, revenue: 6336800 },
  { city: 'Ahmedabad', customers: 380, revenue: 5670400 },
  { city: 'Jaipur', customers: 360, revenue: 5337600 },
  { city: 'Surat', customers: 320, revenue: 4836800 }
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
    description: `${item.customers} customers, ₹${item.revenue.toLocaleString()} revenue`,
    url: '/dashboard/customers'
  })),
  
  // Categories
  ...categorySalesData.map((item, index) => ({
    id: `category-${index}`,
    type: 'category',
    title: item.category,
    category: 'Product Category',
    description: `₹${item.revenue.toLocaleString()} revenue, ${item.quantity} units sold`,
    url: '/dashboard/categories'
  })),
  
  // Orders (sample data)
  { id: 'order-1', type: 'order', title: 'Order #12345', category: 'Recent Order', description: 'iPhone 15 Pro - ₹99,900', url: '/dashboard/sales' },
  { id: 'order-2', type: 'order', title: 'Order #12346', category: 'Recent Order', description: 'MacBook Pro M3 - ₹2,08,400', url: '/dashboard/sales' },
  { id: 'order-3', type: 'order', title: 'Order #12347', category: 'Recent Order', description: 'Sony WH-1000XM5 - ₹33,290', url: '/dashboard/sales' }
];