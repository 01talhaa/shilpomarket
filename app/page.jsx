import Header from "../components/Header";
import WhatsAppWidget from "../components/WhatsAppWidget";

// Import the new modular components
import Hero from "../components/Homepage/Hero";
import States from "../components/Homepage/States";
import Category from "../components/Homepage/Category";
import FeaturedProducts from "../components/Homepage/FeaturedProducts";
import FeaturedSuppliers from "../components/Homepage/FeaturedSuppliers";
import Partners from "../components/Homepage/Partners";
import Transactions from "../components/Homepage/Transactions";
import Testimonial from "../components/Homepage/Testimonial";
import Insights from "../components/Homepage/Insights";
import Ctc from "../components/Homepage/Ctc";

export default function HomePage() {
  // Data remains in the parent component to be passed as props
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Steel Rods",
      supplier: "MetalCorp Industries",
      price: "$1,250/ton",
      originalPrice: "$1,470/ton",
      image: "/placeholder.svg?height=300&width=300",
      category: "Metals",
      rating: 4.8,
      reviews: 234,
      minOrder: "5 tons",
      discount: "15% OFF",
      trending: true,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 2,
      name: "Industrial Grade Plastic Pellets",
      supplier: "PolyTech Solutions",
      price: "$850/ton",
      originalPrice: "$950/ton",
      image: "/placeholder.svg?height=300&width=300",
      category: "Plastics",
      rating: 4.9,
      reviews: 189,
      minOrder: "2 tons",
      discount: "10% OFF",
      trending: false,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 3,
      name: "Organic Cotton Fiber",
      supplier: "EcoTextile Co.",
      price: "$2,100/ton",
      originalPrice: "$2,625/ton",
      image: "/placeholder.svg?height=300&width=300",
      category: "Textiles",
      rating: 4.7,
      reviews: 156,
      minOrder: "1 ton",
      discount: "20% OFF",
      trending: true,
      inStock: true,
      fastDelivery: false,
    },
    {
      id: 4,
      name: "Chemical Grade Aluminum",
      supplier: "AlumTech Industries",
      price: "$1,800/ton",
      originalPrice: "$2,000/ton",
      image: "/placeholder.svg?height=300&width=300",
      category: "Chemicals",
      rating: 4.6,
      reviews: 298,
      minOrder: "3 tons",
      discount: "10% OFF",
      trending: false,
      inStock: true,
      fastDelivery: true,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Electronics & Components",
      icon: "�",
      count: "2,847+ Products",
      color: "from-blue-500 to-purple-600",
      description: "Semiconductors, circuits, and electronic components",
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      icon: "�",
      count: "1,923+ Products",
      color: "from-green-500 to-teal-600",
      description: "Cotton, silk, synthetic fabrics, and textile materials",
    },
    {
      id: 3,
      name: "Chemicals & Materials",
      icon: "⚗️",
      count: "3,156+ Products",
      color: "from-orange-500 to-red-600",
      description: "Industrial chemicals, polymers, and raw materials",
    },
    {
      id: 4,
      name: "Metals & Alloys",
      icon: "🔩",
      count: "1,634+ Products",
      color: "from-gray-500 to-blue-600",
      description: "Steel, aluminum, copper, and specialty metals",
    },
    {
      id: 5,
      name: "Agriculture & Food",
      icon: "🌾",
      count: "2,245+ Products",
      color: "from-yellow-500 to-orange-600",
      description: "Grains, spices, processed foods, and agricultural products",
    },
    {
      id: 6,
      name: "Construction & Building",
      icon: "🏗️",
      count: "1,789+ Products",
      color: "from-amber-500 to-yellow-600",
      description: "Cement, tiles, hardware, and building materials",
    },
  ];

  const topCompanies = [
    {
      id: 1,
      name: "MetalCorp Industries",
      logo: "/placeholder.svg?height=100&width=100",
      products: 245,
      rating: 4.8,
      location: "USA",
      verified: true,
      specialization: "Steel & Metal Products",
      yearEstablished: "1995",
      employees: "500-1000",
    },
    {
      id: 2,
      name: "PolyTech Solutions",
      logo: "/placeholder.svg?height=100&width=100",
      products: 189,
      rating: 4.9,
      location: "Germany",
      verified: true,
      specialization: "Polymer & Plastic Materials",
      yearEstablished: "2001",
      employees: "200-500",
    },
    {
      id: 3,
      name: "EcoTextile Co.",
      logo: "/placeholder.svg?height=100&width=100",
      products: 156,
      rating: 4.7,
      location: "India",
      verified: true,
      specialization: "Sustainable Textiles",
      yearEstablished: "2010",
      employees: "100-200",
    },
    {
      id: 4,
      name: "ChemCore Ltd.",
      logo: "/placeholder.svg?height=100&width=100",
      products: 298,
      rating: 4.6,
      location: "UK",
      verified: true,
      specialization: "Industrial Chemicals",
      yearEstablished: "1988",
      employees: "1000+",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      product: "Steel Rods",
      buyer: "Construction Corp",
      amount: "$125,000",
      quantity: "100 tons",
      date: "2 hours ago",
      status: "completed",
      country: "🇺🇸",
    },
    {
      id: 2,
      product: "Plastic Pellets",
      buyer: "Manufacturing Inc",
      amount: "$85,000",
      quantity: "50 tons",
      date: "4 hours ago",
      status: "processing",
      country: "🇩🇪",
    },
    {
      id: 3,
      product: "Cotton Fiber",
      buyer: "Textile Mills",
      amount: "$210,000",
      quantity: "75 tons",
      date: "6 hours ago",
      status: "completed",
      country: "🇮🇳",
    },
    {
      id: 4,
      product: "Aluminum Sheets",
      buyer: "Aerospace Ltd",
      amount: "$340,000",
      quantity: "120 tons",
      date: "8 hours ago",
      status: "completed",
      country: "🇬🇧",
    },
  ];

  const newsBlogs = [
    {
      id: 1,
      slug: "global-steel-prices-rise-15-q4-2024",
      title: "Global Steel Prices Rise 15% in Q4 2024",
      excerpt:
        "Market analysis shows significant price increases across all steel categories due to increased demand from construction and automotive sectors...",
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
      excerpt:
        "How eco-friendly materials are reshaping industrial production and creating new opportunities for suppliers and manufacturers worldwide...",
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
      excerpt:
        "Latest government policies affecting international trade and what suppliers need to know about compliance and documentation requirements...",
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
      excerpt:
        "Artificial intelligence is transforming how companies manage their supply chains, reducing costs and improving efficiency across industries...",
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
      excerpt:
        "Current supply chain disruptions are causing material shortages worldwide, affecting prices and availability across multiple sectors...",
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
      excerpt:
        "Environmental regulations are driving innovation in chemical processes, creating opportunities for sustainable material suppliers...",
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
      excerpt:
        "How blockchain is revolutionizing transparency and traceability in raw material sourcing and distribution networks...",
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
      excerpt:
        "The rapid growth of electric vehicles is creating unprecedented demand for lithium, cobalt, and other essential metals...",
      image: "/placeholder.svg?height=250&width=400",
      date: "Nov 28, 2024",
      category: "Industry Trends",
      readTime: "7 min read",
      author: "Robert Kim",
      trending: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "David Rodriguez",
      company: "Global Manufacturing Inc.",
      role: "Procurement Manager",
      content:
        "RawMart has revolutionized our sourcing process. We've reduced costs by 25% and improved supplier relationships significantly.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Lisa Wang",
      company: "EcoTech Solutions",
      role: "Supply Chain Director",
      content:
        "The platform's verification system gives us confidence in our suppliers. Quality has never been better.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      company: "Middle East Metals",
      role: "CEO",
      content:
        "As a supplier, RawMart has opened doors to global markets we never thought possible. Excellent platform!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Global Steel Corp",
      logo: "🏭",
      industry: "Steel Manufacturing",
      since: "2019",
      volume: "$5.2M+",
    },
    {
      id: 2,
      name: "EcoPlastic Solutions",
      logo: "♻️",
      industry: "Sustainable Materials",
      since: "2020",
      volume: "$3.8M+",
    },
    {
      id: 3,
      name: "TechFiber Industries",
      logo: "🧵",
      industry: "Advanced Textiles",
      since: "2018",
      volume: "$4.1M+",
    },
    {
      id: 4,
      name: "ChemCore International",
      logo: "⚗️",
      industry: "Chemical Processing",
      since: "2017",
      volume: "$6.7M+",
    },
    {
      id: 5,
      name: "MetalWorks Ltd",
      logo: "🔧",
      industry: "Metal Processing",
      since: "2021",
      volume: "$2.9M+",
    },
    {
      id: 6,
      name: "BuildMat Supplies",
      logo: "🏗️",
      industry: "Construction Materials",
      since: "2019",
      volume: "$7.3M+",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <States />
      <Category categories={categories} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <FeaturedSuppliers topCompanies={topCompanies} />
      <Partners partners={partners} />
      <Transactions recentTransactions={recentTransactions} />
      <Testimonial testimonials={testimonials} />
      <Insights newsBlogs={newsBlogs} />
      <Ctc/>
      <WhatsAppWidget />
    </div>
  );
}