import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import SalesAnalytics from './pages/SalesAnalytics';
import CategoryAnalytics from './pages/CategoryAnalytics';
import CustomerInsights from './pages/CustomerInsights';
import InventoryManagement from './pages/InventoryManagement';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SearchProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route index element={<DashboardHome />} />
                <Route path="sales" element={<SalesAnalytics />} />
                <Route path="categories" element={<CategoryAnalytics />} />
                <Route path="customers" element={<CustomerInsights />} />
                <Route path="inventory" element={<InventoryManagement />} />
                <Route path="settings" element={<Settings />} />
                <Route path="help" element={<Help />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Router>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;