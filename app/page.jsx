import Header from "../components/Header";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Chatbot from "../components/Chatbot";

// Import the new modular components
import Hero from "../components/Homepage/Hero";
import States from "../components/Homepage/States";
import Category from "../components/Homepage/Category";
import FeaturedProducts from "../components/Homepage/FeaturedProducts";
// import FeaturedSuppliers from "../components/Homepage/FeaturedSuppliers";
import FeaturedSuppliers from "../components/Homepage/FeaturedSuppliers";
import Partners from "../components/Homepage/Partners";
import Transactions from "../components/Homepage/Transactions";
import Testimonial from "../components/Homepage/Testimonial";
import Insights from "../components/Homepage/Insights";
import Ctc from "../components/Homepage/Ctc";
import TopSellingProducts from "../components/Homepage/TopSellingProducts";
import TopCategories from "../components/Homepage/TopCategories";

export default function HomePage() {
  // Data remains in the parent component to be passed as props
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Steel Rods",
      supplier: "MetalCorp Industries",
      price: "$1,250/ton",
      originalPrice: "$1,470/ton",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1516110833967-0b5ee0d1c86c?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1565206329-ca5961c2d3e8?w=300&h=300&fit=crop",
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
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
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
      logo: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=100&h=100&fit=crop",
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
      logo: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=100&h=100&fit=crop",
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
      logo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&h=100&fit=crop",
      products: 298,
      rating: 4.6,
      location: "UK",
      verified: true,
      specialization: "Industrial Chemicals",
      yearEstablished: "1988",
      employees: "1000+",
    },
    {
      id: 5,
      name: "BioTech Solutions",
      logo: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=100&h=100&fit=crop",
      products: 167,
      rating: 4.8,
      location: "Canada",
      verified: true,
      specialization: "Biotechnology Materials",
      yearEstablished: "2015",
      employees: "100-200",
    },
    {
      id: 6,
      name: "GreenEnergy Materials",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=100&h=100&fit=crop",
      products: 203,
      rating: 4.7,
      location: "Netherlands",
      verified: true,
      specialization: "Renewable Energy Components",
      yearEstablished: "2018",
      employees: "200-500",
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
      image: "https://images.unsplash.com/photo-1544473244-f6895e69ad8b?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      name: "Lisa Wang",
      company: "EcoTech Solutions",
      role: "Supply Chain Director",
      content:
        "The platform's verification system gives us confidence in our suppliers. Quality has never been better.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c90c2d?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      company: "Middle East Metals",
      role: "CEO",
      content:
        "As a supplier, RawMart has opened doors to global markets we never thought possible. Excellent platform!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
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

  const topSellingProducts = [
    {
      id: 5,
      name: "High-Grade Copper Wire",
      supplier: "ElectroMetal Corp",
      price: "$3,200/ton",
      originalPrice: "$3,800/ton",
      image: "https://images.unsplash.com/photo-1624796274829-1b2b2a3e6d7c?w=300&h=300&fit=crop",
      category: "Metals",
      rating: 4.9,
      reviews: 567,
      minOrder: "2 tons",
      discount: "16% OFF",
      trending: true,
      inStock: true,
      fastDelivery: true,
      salesVolume: "12,450 tons sold",
      bestSeller: true,
    },
    {
      id: 6,
      name: "Food Grade Stainless Steel",
      supplier: "FoodTech Materials",
      price: "$2,850/ton",
      originalPrice: "$3,200/ton",
      image: "https://images.unsplash.com/photo-1565206329-ca5961c2d3e8?w=300&h=300&fit=crop",
      category: "Metals",
      rating: 4.8,
      reviews: 892,
      minOrder: "3 tons",
      discount: "11% OFF",
      trending: false,
      inStock: true,
      fastDelivery: true,
      salesVolume: "8,750 tons sold",
      bestSeller: true,
    },
    {
      id: 7,
      name: "Premium Polyethylene Resin",
      supplier: "PolyMax Industries",
      price: "$1,150/ton",
      originalPrice: "$1,350/ton",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop",
      category: "Plastics",
      rating: 4.7,
      reviews: 445,
      minOrder: "5 tons",
      discount: "15% OFF",
      trending: true,
      inStock: true,
      fastDelivery: false,
      salesVolume: "15,200 tons sold",
      bestSeller: true,
    },
    {
      id: 8,
      name: "Pharmaceutical Grade Titanium",
      supplier: "MedTech Alloys",
      price: "$8,900/ton",
      originalPrice: "$9,800/ton",
      image: "https://images.unsplash.com/photo-1601972599114-9de5e9771e15?w=300&h=300&fit=crop",
      category: "Metals",
      rating: 4.9,
      reviews: 234,
      minOrder: "1 ton",
      discount: "9% OFF",
      trending: false,
      inStock: true,
      fastDelivery: true,
      salesVolume: "3,450 tons sold",
      bestSeller: true,
    },
  ];

  const topCategories = [
    {
      id: 1,
      name: "Electronics & Components",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=300&fit=crop",
      description: "Semiconductors, circuits, and electronic components for modern technology",
      rating: 4.8,
      suppliers: 245,
      productCount: 2847,
      subCategories: 15,
      priceRange: "$50-$5,000",
      trending: true,
      featured: true,
      verified: true,
      slug: "electronics-components",
    },
    {
      id: 2,
      name: "Chemicals & Materials",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=300&fit=crop",
      description: "Industrial chemicals, polymers, and advanced materials for manufacturing",
      rating: 4.7,
      suppliers: 298,
      productCount: 3156,
      subCategories: 22,
      priceRange: "$100-$8,000",
      trending: true,
      featured: false,
      verified: true,
      slug: "chemicals-materials",
    },
    {
      id: 3,
      name: "Metals & Alloys",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      description: "Steel, aluminum, copper, and specialty metals for construction and manufacturing",
      rating: 4.9,
      suppliers: 189,
      productCount: 1634,
      subCategories: 12,
      priceRange: "$500-$15,000",
      trending: false,
      featured: true,
      verified: true,
      slug: "metals-alloys",
    },
    {
      id: 4,
      name: "Textiles & Fabrics",
      image: "https://images.unsplash.com/photo-1516110833967-0b5ee0d1c86c?w=300&h=300&fit=crop",
      description: "Cotton, silk, synthetic fabrics, and textile materials for fashion and industry",
      rating: 4.6,
      suppliers: 167,
      productCount: 1923,
      subCategories: 18,
      priceRange: "$200-$3,500",
      trending: false,
      featured: false,
      verified: true,
      slug: "textiles-fabrics",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <States />
      <Category categories={categories} />
      <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-auto mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <FeaturedProducts featuredProducts={featuredProducts} />
        <FeaturedSuppliers topCompanies={topCompanies} />
        <TopSellingProducts topSellingProducts={topSellingProducts} />
        <TopCategories topCategories={topCategories} />
      </div>
      <Partners partners={partners} />
      <Transactions recentTransactions={recentTransactions} />
      <Testimonial testimonials={testimonials} />
      <Insights newsBlogs={newsBlogs} />
      <Ctc />
      <Chatbot />
      <WhatsAppWidget />
    </div>
  );
}