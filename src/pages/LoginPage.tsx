import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const { login, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Basic validation
    if (!email.trim()) {
      setFormError('Email is required');
      return;
    }
    
    if (!password) {
      setFormError('Password is required');
      return;
    }
    
    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);
    
    if (success) {
      navigate('/dashboard');
    }
  };

  // Analytics icon component based on the provided image
  const AnalyticsIcon = () => (
    <svg className="w-12 h-12 text-blue-800" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <AnalyticsIcon />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">GizmoStore Analytics</h2>
            <p className="mt-2 text-sm text-gray-600">Sign in to your dashboard</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {(formError || error) && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start text-red-600">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{formError || error}</span>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 bg-white"
                  placeholder="admin@gizmostore.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 bg-white"
                  placeholder="admin123"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-700 hover:text-blue-600">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <div>
              <Button
                type="submit"
                fullWidth
                isLoading={isLoading}
                className="py-2.5"
              >
                Sign in
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials:</h4>
              <div className="text-xs text-blue-700 space-y-1">
                <div><strong>Admin:</strong> admin@gizmostore.com / admin123</div>
                <div><strong>Manager:</strong> manager@gizmostore.com / manager123</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;