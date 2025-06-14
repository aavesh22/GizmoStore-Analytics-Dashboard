import React, { useState } from 'react';
import { Search, MessageCircle, Book, Video, Mail, Phone } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your email.'
    },
    {
      id: 2,
      category: 'analytics',
      question: 'How do I export sales data?',
      answer: 'Navigate to the Sales Analytics page and click the "Export" button. You can choose to export data in CSV format for the selected time period.'
    },
    {
      id: 3,
      category: 'inventory',
      question: 'How do I add new products to inventory?',
      answer: 'Go to the Inventory Management page and click the "Add Product" button. Fill in the product details including name, category, stock quantity, and threshold levels.'
    },
    {
      id: 4,
      category: 'analytics',
      question: 'What do the different chart types mean?',
      answer: 'Line charts show trends over time, bar charts compare different categories, and pie charts show proportional data. Hover over chart elements for detailed information.'
    },
    {
      id: 5,
      category: 'general',
      question: 'How do I change my notification settings?',
      answer: 'Go to Settings > Notification Preferences to customize which notifications you want to receive via email or push notifications.'
    },
    {
      id: 6,
      category: 'inventory',
      question: 'What does "Low Stock" status mean?',
      answer: 'Low Stock status appears when a product\'s current inventory falls below the threshold you\'ve set for that product. This helps you reorder before running out.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'inventory', name: 'Inventory' }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <PageHeader 
        title="Help & Support"
        subtitle="Find answers to common questions and get support"
      />
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Documentation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Comprehensive guides and tutorials
            </p>
            <Button variant="outline" size="sm">View Docs</Button>
          </div>
        </Card>
        
        <Card className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Step-by-step video guides
            </p>
            <Button variant="outline" size="sm">Watch Videos</Button>
          </div>
        </Card>
        
        <Card className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Get instant help from our team
            </p>
            <Button variant="outline" size="sm">Start Chat</Button>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card title="Frequently Asked Questions" subtitle="Find quick answers to common questions">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <details key={faq.id} className="group border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No FAQs found matching your search.</p>
          </div>
        )}
      </Card>

      {/* Contact Support */}
      <Card title="Still Need Help?" subtitle="Get in touch with our support team" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Email Support</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">support@gizmostore.com</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Response within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Phone Support</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Help;