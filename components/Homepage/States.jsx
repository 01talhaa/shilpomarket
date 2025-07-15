"use client"

export default function States() {

  const stats = [
    {
      number: "10K+",
      label: "Active Suppliers",
      color: "from-blue-500 to-blue-600",
      icon: "🏢",
      description: "Verified companies",
      details: "Trusted manufacturers worldwide",
      trend: "+12% this month",
      badge: "Growing"
    },
    {
      number: "50K+",
      label: "Products Listed",
      color: "from-green-500 to-green-600",
      icon: "📦",
      description: "Quality materials",
      details: "Premium industrial goods",
      trend: "+8% this month",
      badge: "Expanding"
    },
    {
      number: "$2.1B+",
      label: "Trade Volume",
      color: "from-purple-500 to-purple-600",
      icon: "💰",
      description: "Annual transactions",
      details: "Secure payment processing",
      trend: "+15% this quarter",
      badge: "Record High"
    },
    {
      number: "150+",
      label: "Countries",
      color: "from-orange-500 to-orange-600",
      icon: "🌍",
      description: "Global reach",
      details: "International shipping",
      trend: "+5 new countries",
      badge: "Expanding"
    },
    {
      number: "98.9%",
      label: "Customer Satisfaction",
      color: "from-indigo-500 to-indigo-600",
      icon: "⭐",
      description: "Happy customers",
      details: "Excellent service quality",
      trend: "+0.5% this month",
      badge: "Excellent"
    },
    {
      number: "24/7",
      label: "Support Available",
      color: "from-cyan-500 to-cyan-600",
      icon: "🎧",
      description: "Round-the-clock help",
      details: "Multilingual support team",
      trend: "Always available",
      badge: "Premium"
    },
    {
      number: "5min",
      label: "Average Response",
      color: "from-pink-500 to-pink-600",
      icon: "⚡",
      description: "Lightning fast",
      details: "Quick query resolution",
      trend: "-2min improved",
      badge: "Optimized"
    },
    {
      number: "99.9%",
      label: "Platform Uptime",
      color: "from-teal-500 to-teal-600",
      icon: "🔒",
      description: "Reliable platform",
      details: "Enterprise-grade security",
      trend: "Stable performance",
      badge: "Reliable"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23000' stroke-width='1' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-800">📊 Platform Statistics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Powering Global Trade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the world&apos;s fastest-growing B2B marketplace with industry-leading metrics and 
            <br className="hidden md:block" />
            cutting-edge technology that connects businesses worldwide
          </p>
        </div>

        {/* Stats Grid - Desktop */}
        <div className="hidden md:block relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Scrolling Track */}
          <div className="flex space-x-8 animate-scroll-x hover:[animation-play-state:paused] mb-16">
            {/* First set of stats */}
            {stats.map((stat, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-200 hover:-translate-y-2 min-w-[320px]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className={`bg-gradient-to-r ${stat.color} text-white text-xs px-3 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.badge}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Main Number */}
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
                
                {/* Description */}
                <div className="text-sm text-gray-600 mb-3">{stat.description}</div>
                
                {/* Details */}
                <div className="text-xs text-gray-500 mb-2">{stat.details}</div>
                
                {/* Trend */}
                <div className="flex items-center text-xs">
                  <span className="text-green-600 font-semibold">📈 {stat.trend}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {stats.map((stat, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-200 hover:-translate-y-2 min-w-[320px]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className={`bg-gradient-to-r ${stat.color} text-white text-xs px-3 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.badge}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Main Number */}
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
                
                {/* Description */}
                <div className="text-sm text-gray-600 mb-3">{stat.description}</div>
                
                {/* Details */}
                <div className="text-xs text-gray-500 mb-2">{stat.details}</div>
                
                {/* Trend */}
                <div className="flex items-center text-xs">
                  <span className="text-green-600 font-semibold">📈 {stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Horizontal Scroll - Mobile */}
        <div className="md:hidden relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Scrolling Track */}
          <div className="flex space-x-4 animate-scroll-x hover:[animation-play-state:paused] mb-8">
            {/* First set of stats */}
            {stats.map((stat, index) => (
              <div
                key={`mobile-first-${index}`}
                className="flex-shrink-0 min-w-[280px]"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                  
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className={`bg-gradient-to-r ${stat.color} text-white text-xs px-3 py-1 rounded-full shadow-lg`}>
                      {stat.badge}
                    </div>
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="text-5xl mb-3">
                      {stat.icon}
                    </div>

                    {/* Main Number */}
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="text-lg font-bold text-gray-800 mb-1">{stat.label}</div>
                    
                    {/* Description */}
                    <div className="text-sm text-gray-600 mb-2">{stat.description}</div>
                    
                    {/* Details */}
                    <div className="text-xs text-gray-500 mb-2">{stat.details}</div>
                    
                    {/* Trend */}
                    <div className="flex items-center justify-center text-xs">
                      <span className="text-green-600 font-semibold">📈 {stat.trend}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {stats.map((stat, index) => (
              <div
                key={`mobile-second-${index}`}
                className="flex-shrink-0 min-w-[280px]"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                  
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className={`bg-gradient-to-r ${stat.color} text-white text-xs px-3 py-1 rounded-full shadow-lg`}>
                      {stat.badge}
                    </div>
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="text-5xl mb-3">
                      {stat.icon}
                    </div>

                    {/* Main Number */}
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="text-lg font-bold text-gray-800 mb-1">{stat.label}</div>
                    
                    {/* Description */}
                    <div className="text-sm text-gray-600 mb-2">{stat.description}</div>
                    
                    {/* Details */}
                    <div className="text-xs text-gray-500 mb-2">{stat.details}</div>
                    
                    {/* Trend */}
                    <div className="flex items-center justify-center text-xs">
                      <span className="text-green-600 font-semibold">📈 {stat.trend}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-sm font-medium text-gray-700">🚀 Ready to join?</span>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}