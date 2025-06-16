# 🚀 GizmoStore Analytics Dashboard

A comprehensive, modern analytics dashboard for e-commerce businesses built with React, TypeScript, and Tailwind CSS. This production-ready application provides real-time insights into sales performance, inventory management, customer analytics, and business intelligence.

![GizmoStore Analytics Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center)

## ✨ Features

### 📊 **Analytics & Reporting**
- **Sales Analytics**: Real-time revenue tracking with daily, weekly, monthly, and yearly views
- **Category Performance**: Product category analysis with trend visualization
- **Customer Insights**: Geographic distribution and customer behavior analytics
- **Interactive Charts**: Beautiful, responsive charts using Recharts library
- **Data Export**: CSV export functionality for all analytics data

### 🏪 **Inventory Management**
- **Real-time Stock Tracking**: Monitor product inventory levels
- **Low Stock Alerts**: Automated notifications for products below threshold
- **Product Management**: Add, edit, and manage product catalog
- **Advanced Filtering**: Search and filter products by category, status, price, and stock levels
- **Bulk Operations**: Export inventory data and manage multiple products

### 🎨 **Modern UI/UX**
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop layouts
- **Glass Morphism**: Modern design with backdrop blur effects and subtle overlays
- **Micro-interactions**: Smooth animations and hover effects
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

### 🔐 **Authentication & Security**
- **Secure Login System**: Email/password authentication with form validation
- **Protected Routes**: Route-level authentication guards
- **Session Management**: Persistent login with localStorage
- **Role-based Access**: Admin and manager role support

### 🔍 **Search & Navigation**
- **Global Search**: Intelligent search across products, customers, orders, and categories
- **Smart Suggestions**: Real-time search results with categorized suggestions
- **Breadcrumb Navigation**: Clear navigation hierarchy
- **Quick Actions**: Contextual action buttons throughout the interface

### 🔔 **Notifications & Alerts**
- **Real-time Notifications**: Bell icon with unread count indicator
- **Smart Alerts**: Low stock, new orders, and system notifications
- **Notification Center**: Centralized notification management
- **Customizable Preferences**: User-configurable notification settings

## 🛠️ Technology Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Lightning-fast build tool and development server
- **React Router** - Client-side routing with protected routes

### **UI Components & Icons**
- **Lucide React** - Beautiful, customizable SVG icons
- **Recharts** - Composable charting library for React
- **Custom Components** - Reusable UI components with consistent design

### **State Management**
- **React Context** - Global state management for auth, theme, and search
- **Local Storage** - Persistent user preferences and session data
- **Custom Hooks** - Reusable logic for common operations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gizmostore-analytics.git
   cd gizmostore-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🔑 Demo Credentials

Use these credentials to explore the dashboard:

**Admin Account:**
- Email: `admin@gizmostore.com`
- Password: `admin@123`

**Manager Account:**
- Email: `manager@gizmostore.com`
- Password: `manager@123`

## 📱 Features Overview

### **Dashboard Home**
- Revenue and sales overview
- Key performance indicators (KPIs)
- Recent activity and trends
- Quick access to important metrics

### **Sales Analytics**
- Revenue trends with multiple timeframes
- Order volume analysis
- Top-performing products
- Conversion rate tracking
- Export capabilities with date filtering

### **Category Analytics**
- Product category performance
- Market share analysis
- Trend analysis over time
- Category comparison charts

### **Customer Insights**
- Geographic customer distribution
- New vs. returning customer analysis
- Customer lifetime value
- Regional performance metrics

### **Inventory Management**
- Real-time stock levels
- Low stock alerts
- Product catalog management
- Advanced search and filtering
- Bulk operations and exports

### **Settings & Preferences**
- User profile management
- Notification preferences
- Theme customization
- Security settings

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue (#1E40AF) - Trust and professionalism
- **Secondary**: Teal (#0D9488) - Growth and success
- **Accent**: Amber (#F59E0B) - Attention and warnings
- **Success**: Green (#10B981) - Positive actions
- **Error**: Red (#EF4444) - Alerts and errors

### **Typography**
- **Headings**: Inter font family with proper hierarchy
- **Body**: Optimized line heights (150% for body, 120% for headings)
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### **Spacing System**
- **Base Unit**: 8px grid system
- **Consistent Margins**: Multiples of 8px for all spacing
- **Component Padding**: Standardized internal spacing

## 📊 Data & Analytics

### **Currency Support**
- **Indian Rupees (₹)**: Primary currency with proper formatting
- **Number Formatting**: Indian numbering system with lakhs and crores
- **Localization**: Region-appropriate date and number formats

### **Mock Data**
- **Realistic Sales Data**: 12 months of sample revenue and order data
- **Product Catalog**: 50+ sample products across multiple categories
- **Customer Data**: Geographic distribution across major Indian cities
- **Inventory Levels**: Realistic stock levels with low stock scenarios

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:

```env
VITE_APP_NAME=GizmoStore Analytics
VITE_API_URL=https://api.gizmostore.com
VITE_ENABLE_ANALYTICS=true
```

### **Theme Customization**
Modify `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## 🚀 Deployment

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### **Vercel**
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### **Traditional Hosting**
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure server to serve `index.html` for all routes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Recharts** - For the powerful charting library
- **Vite** - For the lightning-fast build tool

## 📞 Support

For support and questions:
- 📧 Email: support@gizmostore.com
- 💬 Discord: [Join our community](https://discord.gg/gizmostore)
- 📖 Documentation: [docs.gizmostore.com](https://docs.gizmostore.com)

---

**Built with ❤️ by the GizmoStore Team**

*Making e-commerce analytics beautiful and accessible for everyone.*