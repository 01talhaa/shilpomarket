import Link from "next/link";
import { notFound } from "next/navigation";

  const insightsData = {
    "global-steel-prices-rise-15-q4-2024": {
      id: 1,
      slug: "global-steel-prices-rise-15-q4-2024",
      title: "Global Steel Prices Rise 15% in Q4 2024",
      excerpt: "Market analysis shows significant price increases across all steel categories due to increased demand from construction and automotive sectors...",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=800&h=400&fit=crop",
      date: "Dec 15, 2024",
      category: "Market News",
      readTime: "5 min read",
      author: "John Smith",
      trending: true,
    content: `
      <p>The global steel market has experienced a significant surge in prices during the fourth quarter of 2024, with an average increase of 15% across all major steel categories. This unprecedented rise is primarily attributed to the robust demand from construction and automotive sectors, coupled with supply chain constraints affecting raw material availability.</p>
      
      <h2>Key Market Drivers</h2>
      <p>Several factors have contributed to this price increase:</p>
      <ul>
        <li><strong>Construction Boom:</strong> Major infrastructure projects worldwide have increased steel demand by 23%</li>
        <li><strong>Automotive Recovery:</strong> Post-pandemic automotive production has surged, driving steel consumption</li>
        <li><strong>Supply Constraints:</strong> Mining disruptions and transportation bottlenecks have limited raw material supply</li>
        <li><strong>Energy Costs:</strong> Rising energy prices have increased production costs across steel mills</li>
      </ul>
      
      <h2>Regional Impact Analysis</h2>
      <p>The price increases have varied by region, with Asia-Pacific markets experiencing the most significant changes. China, as the world's largest steel producer, has seen prices rise by 18%, while European markets have experienced a 12% increase.</p>
      
      <p>Industry experts predict that these price levels may persist into the first quarter of 2025, with potential for further increases if demand continues to outpace supply capacity.</p>
      
      <h2>Future Outlook</h2>
      <p>Looking ahead, the steel industry is expected to adapt through increased production capacity and technological improvements. Companies are investing in more efficient production methods and exploring alternative supply chains to mitigate future price volatility.</p>
    `,
  },
    "sustainable-raw-materials-future-manufacturing": {
      id: 2,
      slug: "sustainable-raw-materials-future-manufacturing",
      title: "Sustainable Raw Materials: The Future of Manufacturing",
      excerpt: "How eco-friendly materials are reshaping industrial production and creating new opportunities for suppliers and manufacturers worldwide...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      date: "Dec 12, 2024",
      category: "Industry Insights",
      readTime: "8 min read",
      author: "Sarah Johnson",
      trending: false,
    content: `
      <p>The manufacturing industry is undergoing a revolutionary transformation as sustainability becomes a core business imperative. Companies worldwide are increasingly adopting eco-friendly raw materials to reduce their environmental footprint while maintaining operational efficiency.</p>
      
      <h2>The Sustainability Imperative</h2>
      <p>Environmental regulations and consumer awareness are driving unprecedented demand for sustainable materials. This shift is creating new opportunities for suppliers who can provide certified, eco-friendly alternatives to traditional raw materials.</p>
      
      <h2>Key Sustainable Materials</h2>
      <ul>
        <li><strong>Bio-based Plastics:</strong> Derived from renewable resources, reducing petroleum dependency</li>
        <li><strong>Recycled Metals:</strong> Circular economy principles driving metal reuse and recycling</li>
        <li><strong>Organic Fibers:</strong> Sustainable textile production using organic cotton and hemp</li>
        <li><strong>Green Chemicals:</strong> Environmentally friendly chemical processes and products</li>
      </ul>
      
      <h2>Market Opportunities</h2>
      <p>The sustainable materials market is projected to grow by 35% over the next five years, creating significant opportunities for forward-thinking suppliers and manufacturers.</p>
    `,
  },
    "new-trade-regulations-impact-raw-material-imports": {
      id: 3,
      slug: "new-trade-regulations-impact-raw-material-imports",
      title: "New Trade Regulations Impact Raw Material Imports",
      excerpt: "Latest government policies affecting international trade and what suppliers need to know about compliance and documentation requirements...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      date: "Dec 10, 2024",
      category: "Regulations",
      readTime: "6 min read",
      author: "Michael Chen",
      trending: true,
    content: `
      <p>Recent changes in international trade regulations are significantly impacting raw material imports, requiring suppliers and manufacturers to adapt their compliance strategies and documentation processes.</p>
      
      <h2>Key Regulatory Changes</h2>
      <p>The new regulations focus on several critical areas:</p>
      <ul>
        <li><strong>Enhanced Documentation:</strong> More detailed origin certificates and quality attestations</li>
        <li><strong>Sustainability Requirements:</strong> Environmental compliance documentation mandatory</li>
        <li><strong>Digital Tracking:</strong> Implementation of blockchain-based supply chain tracking</li>
        <li><strong>Quality Standards:</strong> Stricter quality control and testing requirements</li>
      </ul>
      
      <h2>Compliance Strategies</h2>
      <p>Companies must develop comprehensive compliance frameworks to navigate these new requirements effectively. This includes investing in digital documentation systems and establishing partnerships with certified testing laboratories.</p>
    `,
  },
  "ai-powered-supply-chain-optimization": {
    id: 4,
    slug: "ai-powered-supply-chain-optimization",
    title: "AI-Powered Supply Chain Optimization",
    excerpt: "Artificial intelligence is transforming how companies manage their supply chains, reducing costs and improving efficiency across industries...",
    image: "/placeholder.svg?height=400&width=800",
    date: "Dec 8, 2024",
    category: "Technology",
    readTime: "7 min read",
    author: "Emily Watson",
    trending: true,
    content: `
      <p>Artificial intelligence is revolutionizing supply chain management, enabling companies to optimize operations, reduce costs, and improve efficiency across all sectors of the raw materials industry.</p>
      
      <h2>AI Applications in Supply Chain</h2>
      <ul>
        <li><strong>Demand Forecasting:</strong> Predictive analytics for accurate demand planning</li>
        <li><strong>Inventory Optimization:</strong> Real-time inventory management and automated reordering</li>
        <li><strong>Route Optimization:</strong> AI-driven logistics planning for cost reduction</li>
        <li><strong>Quality Control:</strong> Automated quality inspection using machine learning</li>
      </ul>
      
      <h2>Benefits and ROI</h2>
      <p>Companies implementing AI-powered supply chain solutions report average cost reductions of 20-30% and efficiency improvements of up to 40%.</p>
    `,
  },
  "raw-material-shortage-impact-global-markets": {
    id: 5,
    slug: "raw-material-shortage-impact-global-markets",
    title: "Raw Material Shortage: Impact on Global Markets",
    excerpt: "Current supply chain disruptions are causing material shortages worldwide, affecting prices and availability across multiple sectors...",
    image: "/placeholder.svg?height=400&width=800",
    date: "Dec 5, 2024",
    category: "Market Analysis",
    readTime: "6 min read",
    author: "David Park",
    trending: false,
    content: `
      <p>Global raw material shortages are creating significant challenges for manufacturers worldwide, leading to price volatility and production delays across multiple industries.</p>
      
      <h2>Affected Materials</h2>
      <ul>
        <li><strong>Semiconductors:</strong> Critical shortage affecting electronics production</li>
        <li><strong>Rare Earth Elements:</strong> Limited supply impacting renewable energy sector</li>
        <li><strong>Aluminum:</strong> Production constraints driving price increases</li>
        <li><strong>Copper:</strong> High demand from infrastructure projects</li>
      </ul>
      
      <h2>Market Impact</h2>
      <p>The shortages are forcing companies to diversify their supplier base and invest in alternative materials research to mitigate future supply risks.</p>
    `,
  },
  "green-chemistry-revolution-industrial-production": {
    id: 6,
    slug: "green-chemistry-revolution-industrial-production",
    title: "Green Chemistry Revolution in Industrial Production",
    excerpt: "Environmental regulations are driving innovation in chemical processes, creating opportunities for sustainable material suppliers...",
    image: "/placeholder.svg?height=400&width=800",
    date: "Dec 3, 2024",
    category: "Sustainability",
    readTime: "9 min read",
    author: "Maria Santos",
    trending: true,
    content: `
      <p>The green chemistry revolution is transforming industrial production processes, with companies adopting environmentally friendly chemical processes and materials to meet regulatory requirements and consumer demands.</p>
      
      <h2>Green Chemistry Principles</h2>
      <ul>
        <li><strong>Waste Prevention:</strong> Designing processes to minimize waste generation</li>
        <li><strong>Renewable Feedstocks:</strong> Using renewable raw materials instead of fossil fuels</li>
        <li><strong>Energy Efficiency:</strong> Developing energy-efficient manufacturing processes</li>
        <li><strong>Safer Chemicals:</strong> Creating inherently safer chemical products</li>
      </ul>
      
      <h2>Industry Applications</h2>
      <p>Green chemistry is being applied across various industries, from pharmaceuticals to agriculture, creating new market opportunities for innovative suppliers.</p>
    `,
  },
  "blockchain-technology-supply-chain-management": {
    id: 7,
    slug: "blockchain-technology-supply-chain-management",
    title: "Blockchain Technology in Supply Chain Management",
    excerpt: "How blockchain is revolutionizing transparency and traceability in raw material sourcing and distribution networks...",
    image: "/placeholder.svg?height=400&width=800",
    date: "Dec 1, 2024",
    category: "Technology",
    readTime: "5 min read",
    author: "Alex Chen",
    trending: false,
    content: `
      <p>Blockchain technology is revolutionizing supply chain management by providing unprecedented transparency and traceability in raw material sourcing and distribution.</p>
      
      <h2>Blockchain Benefits</h2>
      <ul>
        <li><strong>Transparency:</strong> Complete visibility into supply chain operations</li>
        <li><strong>Traceability:</strong> Track materials from source to end product</li>
        <li><strong>Security:</strong> Immutable records preventing fraud and counterfeiting</li>
        <li><strong>Efficiency:</strong> Automated processes through smart contracts</li>
      </ul>
      
      <h2>Implementation Challenges</h2>
      <p>While promising, blockchain adoption faces challenges including scalability, energy consumption, and the need for industry-wide standards.</p>
    `,
  },
  "electric-vehicle-boom-drives-metal-demand": {
    id: 8,
    slug: "electric-vehicle-boom-drives-metal-demand",
    title: "Electric Vehicle Boom Drives Metal Demand",
    excerpt: "The rapid growth of electric vehicles is creating unprecedented demand for lithium, cobalt, and other essential metals...",
    image: "/placeholder.svg?height=400&width=800",
    date: "Nov 28, 2024",
    category: "Industry Trends",
    readTime: "7 min read",
    author: "Robert Kim",
    trending: true,
    content: `
      <p>The electric vehicle revolution is creating unprecedented demand for critical metals, reshaping global supply chains and creating new opportunities for mining and metal processing companies.</p>
      
      <h2>Key Metals in Demand</h2>
      <ul>
        <li><strong>Lithium:</strong> Essential for battery production, demand up 400%</li>
        <li><strong>Cobalt:</strong> Critical for battery cathodes, facing supply constraints</li>
        <li><strong>Nickel:</strong> Key component in high-energy density batteries</li>
        <li><strong>Rare Earth Elements:</strong> Essential for electric motors and batteries</li>
      </ul>
      
      <h2>Market Dynamics</h2>
      <p>The EV boom is driving significant investments in mining and processing capacity, with companies racing to secure long-term supply contracts.</p>
    `,
  },
};

export default function InsightDetailPage({ params }) {
  const { slug } = params;
  const insight = insightsData[slug];

  if (!insight) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
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
            <div className="flex items-center space-x-6 text-xs">
              <span className="text-gray-500">Electronics</span>
              <span className="text-gray-500">Fashion</span>
              <span className="text-gray-500">Machinery</span>
              <span className="text-gray-500">Textiles</span>
              <span className="text-gray-500">Chemicals</span>
              <span className="text-gray-500">Agriculture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <nav className="text-xs text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/insights" className="hover:text-blue-600">
              Insights
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800 truncate">{insight.title}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <article>
          {/* Header */}
          <header className="mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                {insight.category}
              </span>
              {insight.trending && (
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                  🔥 Trending
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {insight.title}
            </h1>

            <div className="flex items-center space-x-3 text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">
                    {insight.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-sm font-medium">{insight.author}</span>
              </div>
              <span>•</span>
              <span className="text-sm">{insight.date}</span>
              <span>•</span>
              <span className="text-sm">{insight.readTime}</span>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-sm mb-6">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-sm max-w-none">
            <div
              className="text-gray-700 leading-relaxed text-sm"
              dangerouslySetInnerHTML={{ __html: insight.content }}
            />
          </div>

          {/* Share & Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">Share this article:</span>
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  LinkedIn
                </button>
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  Twitter
                </button>
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  Facebook
                </button>
              </div>
              <Link
                href="/insights"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
              >
                ← Back to Insights
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
