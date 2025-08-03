import Link from "next/link";

export default function InsightsPage() {
  const allInsights = [
    {
      id: 1,
      slug: "global-steel-prices-rise-15-q4-2024",
      title: "Global Steel Prices Rise 15% in Q4 2024",
      excerpt: "Market analysis shows significant price increases across all steel categories due to increased demand from construction and automotive sectors...",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=300&fit=crop",
      date: "Dec 15, 2024",
      category: "Market News",
      readTime: "5 min read",
      author: "John Smith",
      trending: true,
    },
    {
      id: 2,
      slug: "sustainable-raw-materials-future-manufacturing",
      title: "Sustainable Raw Materials: The Future of Manufacturing",
      excerpt: "How eco-friendly materials are reshaping industrial production and creating new opportunities for suppliers and manufacturers worldwide...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      date: "Dec 12, 2024",
      category: "Industry Insights",
      readTime: "8 min read",
      author: "Sarah Johnson",
      trending: false,
    },
    {
      id: 3,
      slug: "new-trade-regulations-impact-raw-material-imports",
      title: "New Trade Regulations Impact Raw Material Imports",
      excerpt: "Latest government policies affecting international trade and what suppliers need to know about compliance and documentation requirements...",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      date: "Dec 10, 2024",
      category: "Regulations",
      readTime: "6 min read",
      author: "Michael Chen",
      trending: true,
    },
    {
      id: 4,
      slug: "ai-powered-supply-chain-optimization",
      title: "AI-Powered Supply Chain Optimization",
      excerpt: "Artificial intelligence is transforming how companies manage their supply chains, reducing costs and improving efficiency across industries...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      date: "Dec 8, 2024",
      category: "Technology",
      readTime: "7 min read",
      author: "Emily Watson",
      trending: true,
    },
    {
      id: 5,
      slug: "raw-material-shortage-impact-global-markets",
      title: "Raw Material Shortage: Impact on Global Markets",
      excerpt: "Current supply chain disruptions are causing material shortages worldwide, affecting prices and availability across multiple sectors...",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      date: "Dec 5, 2024",
      category: "Market Analysis",
      readTime: "6 min read",
      author: "David Park",
      trending: false,
    },
    {
      id: 6,
      slug: "green-chemistry-revolution-industrial-production",
      title: "Green Chemistry Revolution in Industrial Production",
      excerpt: "Environmental regulations are driving innovation in chemical processes, creating opportunities for sustainable material suppliers...",
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=300&fit=crop",
      date: "Dec 3, 2024",
      category: "Sustainability",
      readTime: "9 min read",
      author: "Maria Santos",
      trending: true,
    },
    {
      id: 7,
      slug: "blockchain-technology-supply-chain-management",
      title: "Blockchain Technology in Supply Chain Management",
      excerpt: "How blockchain is revolutionizing transparency and traceability in raw material sourcing and distribution networks...",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      date: "Dec 1, 2024",
      category: "Technology",
      readTime: "5 min read",
      author: "Alex Chen",
      trending: false,
    },
    {
      id: 8,
      slug: "electric-vehicle-boom-drives-metal-demand",
      title: "Electric Vehicle Boom Drives Metal Demand",
      excerpt: "The rapid growth of electric vehicles is creating unprecedented demand for lithium, cobalt, and other essential metals...",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      date: "Nov 28, 2024",
      category: "Industry Trends",
      readTime: "7 min read",
      author: "Robert Kim",
      trending: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Categories", count: allInsights.length },
    { id: "market-news", name: "Market News", count: 2 },
    { id: "technology", name: "Technology", count: 2 },
    { id: "sustainability", name: "Sustainability", count: 1 },
    { id: "regulations", name: "Regulations", count: 1 },
    { id: "industry-trends", name: "Industry Trends", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Insights Header */}
      <section className="bg-white py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-sm">🏭</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-800">
                  <div className="text-lg font-bold tracking-tight">ShilpoMarket</div>
                  <div className="text-xs text-gray-600 -mt-1">Raw Materials Marketplace</div>
                </div>
              </Link>
              <div className="h-10 w-px bg-gray-300"></div>
              <h1 className="text-lg font-semibold text-gray-800">Industry Insights</h1>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <span>{allInsights.length} Articles</span>
              <span>•</span>
              <span>Latest News</span>
            </div>
          </div>
          <div className="mt-2 ml-52 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Trending</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Market Analysis</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Technology</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Sustainability</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Regulations</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">Industry Trends</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Filters Sidebar */}
          <div className="lg:w-1/5">
            <div className="bg-white rounded-lg shadow p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Categories</h4>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="w-full text-left px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Range */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Date Range</h4>
                <div className="space-y-1">
                  <button className="w-full text-left px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-100">
                    Last 7 days
                  </button>
                  <button className="w-full text-left px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-100">
                    Last 30 days
                  </button>
                  <button className="w-full text-left px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-100">
                    Last 3 months
                  </button>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="space-y-2">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Trending Only</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Quick Reads (&lt; 5 min)</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">In-depth Analysis</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="lg:w-4/5">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 bg-white rounded-lg p-2 shadow-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span className="text-sm text-gray-600">{allInsights.length} articles</span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="trending">Trending</option>
                  <option value="read-time">Read Time</option>
                </select>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {allInsights.map((insight) => (
                <Link
                  key={insight.id}
                  href={`/insights/${insight.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {insight.category}
                      </span>
                    </div>
                    {insight.trending && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          🔥
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{insight.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{insight.author}</span>
                      <span>{insight.readTime}</span>
                    </div>
                    
                    <div className="mt-2 text-xs text-gray-400">{insight.date}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
