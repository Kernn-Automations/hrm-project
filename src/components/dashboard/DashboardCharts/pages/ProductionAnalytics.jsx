import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  Factory, 
  TrendingUp, 
  Clock,
  AlertTriangle,
  Gauge
} from 'lucide-react'
import MetricCard from './MetricCard'

const ProductionAnalytics = () => {
  // Dummy data based on the image description
  const milkProcessedData = [
    { day: 'Mon', liters: 850 },
    { day: 'Tue', liters: 700 },
    { day: 'Wed', liters: 1200 },
    { day: 'Thu', liters: 1050 },
    { day: 'Fri', liters: 1350 },
    { day: 'Sat', liters: 1000 },
    { day: 'Sun', liters: 800 }
  ]

  const productsManufacturedData = [
    { product: 'Packaged Milk', value: 2500 },
    { product: 'Curd', value: 1800 },
    { product: 'Butter', value: 1200 },
    { product: 'Ghee', value: 800 }
  ]

  const milkProcessedByCategoryData = [
    { category: 'Packaged Milk', liters: 2500 },
    { category: 'Curd', liters: 1800 },
    { category: 'Butter', liters: 1200 },
    { category: 'Ghee', liters: 800 }
  ]

  return (
    <>
     <div className="flex items-center justify-between p-3">
        <div>
          <h5 className="text-2xl font-bold text-gray-900">PRODUCTION ANALYTICS</h5>
          <p className="text-gray-600">Milk processing and production efficiency</p>
        </div>
      </div>
    <div className="space-y-6 p-3 bg-gray-50 text-gray-900">
      {/* Header */}
     

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        <MetricCard
          title="Total Milk Processed (per week)"
          value="7,700"
          subtitle="liters"
          icon={Factory}
        />
        <MetricCard
          title="Product Yield"
          value="92.5%"
          icon={TrendingUp}
        />
        <MetricCard
          title="Plant Utilization"
          value="75%"
          icon={Gauge}
        />
        <MetricCard
          title="Manufactural Unit Downtime"
          value="75%"
          icon={Clock}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {/* Milk Processed Daily Trend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Milk Processed (liters) - Daily Trend</h6>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={milkProcessedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="liters" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} dot />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Products Manufactured */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Products Manufactured</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productsManufacturedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {/* Milk Processed by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Milk Processed (liters) - By Category</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={milkProcessedByCategoryData} layout="vertical" barSize={40}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="liters" />
              <YAxis type="category" dataKey="category" width={100} />
              <Tooltip />
              <Bar dataKey="liters" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Downtime Gauge */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Manufactural Unit Downtime (Hrs)</h6>
          <div className="space-y-6">
            {/* Gauge Chart Simulation */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">8 hrs</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Machine Breakdown</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center px-5">
                <span className="text-sm text-gray-600">Downtime</span>
                <span className="text-sm font-medium">8 h</span>
              </div>
              <div className="flex justify-between items-center px-5">
                <span className="text-sm text-gray-600">Efficiency</span>
                <span className="text-sm font-medium text-green-600">92.5%</span>
              </div>
              <div className="flex justify-between items-center px-5">
                <span className="text-sm text-gray-600">Production Target</span>
                <span className="text-sm font-medium">8,000 L</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Alerts and Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Production Status</h6>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Line 1 - Running</span>
              </div>
              <span className="text-sm font-medium text-green-600">Normal</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Line 2 - Maintenance</span>
              </div>
              <span className="text-sm font-medium text-yellow-600">Scheduled</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Line 3 - Stopped</span>
              </div>
              <span className="text-sm font-medium text-red-600">Breakdown</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <h6 className="text-lg font-semibold text-gray-900 mb-4">Production Alerts</h6>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg mb-3">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-700">Machine breakdown on Line 3 - 8 hours downtime</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg mb-3">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-700">Low raw material stock for Ghee production</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg mb-3">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-700">Production efficiency improved by 5% this week</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg mb-3">
              <Factory className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">All quality parameters within acceptable range</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductionAnalytics 