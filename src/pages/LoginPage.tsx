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
    <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mobile device outline */}
      <rect x="8" y="4" width="16" height="24" rx="3" stroke="#22D3EE" strokeWidth="2" fill="none"/>
      {/* Top speaker */}
      <rect x="12" y="6" width="8" height="1" rx="0.5" fill="#22D3EE"/>
      {/* Home button */}
      <circle cx="16" cy="25" r="1" fill="#22D3EE"/>
      
      {/* Chart bars inside */}
      <rect x="10" y="16" width="2" height="6" fill="#22D3EE" rx="1"/>
      <rect x="13" y="14" width="2" height="8" fill="#22D3EE" rx="1"/>
      <rect x="16" y="12" width="2" height="10" fill="#FF8C00" rx="1"/>
      <rect x="19" y="15" width="2" height="7" fill="#22D3EE" rx="1"/>
      
      {/* Pie chart */}
      <circle cx="24" cy="8" r="4" stroke="#84CC16" strokeWidth="2" fill="none"/>
      <path d="M24 4 A4 4 0 0 1 28 8 L24 8 Z" fill="#FF8C00"/>
      
      {/* Connection lines */}
      <path d="M20 8 L22 10" stroke="#22D3EE" strokeWidth="2"/>
      <circle cx="6" cy="12" r="1.5" fill="#22D3EE"/>
      <circle cx="6" cy="18" r="1.5" fill="#22D3EE"/>
      <path d="M7.5 12 L8 12" stroke="#22D3EE" strokeWidth="2"/>
      <path d="M7.5 18 L8 18" stroke="#22D3EE" strokeWidth="2"/>
    </svg>
  );
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <AnalyticsIcon />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">GizmoStore Analytics</h1>
          <p className="text-lg text-slate-300">Sign in to your account</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {(formError || error) && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start text-red-400">
              <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{formError || error}</span>
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-800/50 backdrop-blur-sm placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3 pr-12 border border-slate-600 rounded-lg bg-slate-800/50 backdrop-blur-sm placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-300 transition-colors"
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
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-600 rounded bg-slate-800"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;