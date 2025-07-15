import Header from "../../components/Header";
import Link from "next/link";

export default function InsightsPage() {
  const allInsights = [
    {
      id: 1,
      slug: "global-steel-prices-rise-15-q4-2024",
      title: "Global Steel Prices Rise 15% in Q4 2024",
      excerpt: "Market analysis shows significant price increases across all steel categories due to increased demand from construction and automotive sectors...",
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
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
      image: "/placeholder.svg?height=250&width=400",
      date: "Nov 28, 2024",
      category: "Industry Trends",
      readTime: "7 min read",
      author: "Robert Kim",
      trending: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Industry Insights & News
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, market analysis, and industry developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allInsights.map((insight) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                  </div>
                  {insight.trending && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        🔥 Trending
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{insight.author}</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <span>{insight.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
