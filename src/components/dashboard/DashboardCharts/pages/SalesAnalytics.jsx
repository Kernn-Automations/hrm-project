import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  Users,
  MapPin
} from 'lucide-react'
import MetricCard from './MetricCard'

const SalesAnalytics = () => {
  // Dummy data based on the image description
  const salesTrendData = [
    { day: 'Mon', sales: 2.5 },
    { day: 'Tue', sales: 1.8 },
    { day: 'Wed', sales: 2.5 },
    { day: 'Thu', sales: 4.6 },
    { day: 'Fri', sales: 3.9 },
    { day: 'Fri', sales: 4.2 }
  ]

  const salesByProductData = [
    { product: 'Packaged Milk', sales: 1200 },
    { product: 'Curd', sales: 800 },
    { product: 'Butter', sales: 600 },
    { product: 'Ghee', sales: 1400 }
  ]

  const regionData = [
    { name: 'North', value: 35, color: '#3B82F6' },
    { name: 'South', value: 25, color: '#60A5FA' },
    { name: 'West', value: 20, color: '#93C5FD' },
    { name: 'East', value: 15, color: '#BFDBFE' },
    { name: 'Central', value: 5, color: '#DBEAFE' }
  ]

  const topCustomersData = [
    { customer: 'SuperMart', value: 95 },
    { customer: 'Fresh Stores', value: 75 },
    { customer: 'A22 Grocers', value: 60 },
    { customer: 'Daily Needs', value: 40 }
  ]

  return (
    <>
    
    <div className="flex items-center justify-between p-3">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">SALES ANALYTICS</h3>
          <p className="text-gray-600">Sales performance and customer insights</p>
        </div>
      </div>
    <div className="space-y-6  p-3 bg-gray-50 text-gray-900">
      
      

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
        <MetricCard
          title="Total Sales"
          value="₹5,240"
          subtitle="Today"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Sales Growth"
          value="8.2%"
          icon={TrendingUp}
          trend="up"
          trendValue="+2.1% from yesterday"
        />
        <MetricCard
          title="Average Order Value"
          value="₹1,250"
          icon={DollarSign}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {/* Sales Revenue */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Sales Revenue</h6>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Product */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 flex flex-col items-center justify-center shadow-md rounded-lg">
          <h6 className="text-lg font-semibold text-gray-900 mb-4 ">Sales by Product</h6>
          <div className="flex flex-col items-center justify-center w-full">
            <ResponsiveContainer width={220} height={220}>
              <PieChart>
                <Pie
                  data={salesByProductData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="sales"
                  stroke="#fff"
                  strokeWidth={3}
                >
                  <Cell fill="#3B82F6" />
                  <Cell fill="#60A5FA" />
                  <Cell fill="#93C5FD" />
                  <Cell fill="#22C55E" />
                  <Cell fill="#F59E0B" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-row items-center justify-center gap-4 mt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#3B82F6' }}></span>
                <span className="text-base font-medium text-gray-700">Packaged Milk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#60A5FA' }}></span>
                <span className="text-base font-medium text-gray-700">Curd</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#93C5FD' }}></span>
                <span className="text-base font-medium text-gray-700">Butter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#22C55E' }}></span>
                <span className="text-base font-medium text-gray-700">Ghee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Region Outstanding Amount */}
      <div className="mt-8">
        <h6 className="text-xl font-bold text-gray-900 mb-4">Region</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            title="Outstanding Amount to be Received"
            value="₹1,00,000"
            icon={DollarSign}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default SalesAnalytics 