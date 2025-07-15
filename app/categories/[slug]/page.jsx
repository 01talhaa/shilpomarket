import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const { slug } = params;

  // Category data with sample products
  const categories = {
    "electronics-and-components": {
      id: 1,
      name: "Electronics & Components",
      description: "Semiconductors, circuits, and electronic components",
      icon: "🔌",
      color: "from-blue-500 to-purple-600",
      products: [
        {
          id: 1,
          name: "ARM Cortex-M4 Microcontroller",
          price: "$12.50",
          minOrder: "100 units",
          supplier: "TechCorp Industries",
          rating: 4.8,
          image: "/placeholder.jpg",
          specifications: ["32-bit RISC", "120 MHz", "512KB Flash", "128KB RAM"]
        },
        {
          id: 2,
          name: "High-Performance Op-Amp IC",
          price: "$3.25",
          minOrder: "500 units",
          supplier: "Silicon Solutions",
          rating: 4.9,
          image: "/placeholder.jpg",
          specifications: ["Low noise", "High gain", "Wide bandwidth", "Dual supply"]
        },
        {
          id: 3,
          name: "Power Management IC",
          price: "$8.75",
          minOrder: "200 units",
          supplier: "PowerTech Ltd",
          rating: 4.7,
          image: "/placeholder.jpg",
          specifications: ["Multi-output", "High efficiency", "Thermal protection", "Compact size"]
        },
        {
          id: 4,
          name: "Bluetooth 5.0 Module",
          price: "$15.99",
          minOrder: "50 units",
          supplier: "WirelessTech Co",
          rating: 4.6,
          image: "/placeholder.jpg",
          specifications: ["Long range", "Low power", "Easy integration", "FCC certified"]
        },
        {
          id: 5,
          name: "High-Speed ADC Converter",
          price: "$22.30",
          minOrder: "100 units",
          supplier: "DataConvert Inc",
          rating: 4.8,
          image: "/placeholder.jpg",
          specifications: ["16-bit resolution", "1 MSPS", "Low power", "SPI interface"]
        },
        {
          id: 6,
          name: "LED Driver IC",
          price: "$4.50",
          minOrder: "300 units",
          supplier: "LightTech Solutions",
          rating: 4.9,
          image: "/placeholder.jpg",
          specifications: ["PWM dimming", "High efficiency", "Thermal shutdown", "Wide voltage range"]
        }
      ]
    },
    "textiles-and-fabrics": {
      id: 2,
      name: "Textiles & Fabrics",
      description: "Cotton, silk, synthetic fabrics, and textile materials",
      icon: "🧵",
      color: "from-green-500 to-teal-600",
      products: [
        {
          id: 7,
          name: "Premium Cotton Canvas",
          price: "$8.50/meter",
          minOrder: "100 meters",
          supplier: "Cotton Mills Ltd",
          rating: 4.7,
          image: "/placeholder.jpg",
          specifications: ["100% Cotton", "Heavy weight", "Pre-shrunk", "Eco-friendly"]
        },
        {
          id: 8,
          name: "Silk Charmeuse Fabric",
          price: "$35.00/meter",
          minOrder: "50 meters",
          supplier: "Silk Traders Inc",
          rating: 4.9,
          image: "/placeholder.jpg",
          specifications: ["Pure silk", "Luxurious feel", "Breathable", "Natural sheen"]
        },
        {
          id: 9,
          name: "Polyester Blend Fabric",
          price: "$6.25/meter",
          minOrder: "200 meters",
          supplier: "Synthetic Textiles",
          rating: 4.5,
          image: "/placeholder.jpg",
          specifications: ["Wrinkle resistant", "Durable", "Easy care", "Color fast"]
        },
        {
          id: 10,
          name: "Organic Hemp Fabric",
          price: "$18.75/meter",
          minOrder: "75 meters",
          supplier: "EcoFiber Co",
          rating: 4.8,
          image: "/placeholder.jpg",
          specifications: ["Organic certified", "Antimicrobial", "UV resistant", "Sustainable"]
        },
        {
          id: 11,
          name: "Wool Blend Suiting",
          price: "$42.00/meter",
          minOrder: "25 meters",
          supplier: "Wool Masters",
          rating: 4.6,
          image: "/placeholder.jpg",
          specifications: ["70% Wool", "Wrinkle resistant", "Breathable", "Professional grade"]
        },
        {
          id: 12,
          name: "Technical Performance Fabric",
          price: "$28.90/meter",
          minOrder: "100 meters",
          supplier: "TechTextiles Pro",
          rating: 4.7,
          image: "/placeholder.jpg",
          specifications: ["Moisture-wicking", "Stretch", "Antimicrobial", "Quick-dry"]
        }
      ]
    },
    "chemicals-and-materials": {
      id: 3,
      name: "Chemicals & Materials",
      description: "Industrial chemicals, polymers, and raw materials",
      icon: "⚗️",
      color: "from-orange-500 to-red-600",
      products: [
        {
          id: 13,
          name: "High-Grade Titanium Dioxide",
          price: "$2,850/ton",
          minOrder: "5 tons",
          supplier: "ChemCorp Industries",
          rating: 4.8,
          image: "/placeholder.jpg",
          specifications: ["99.5% purity", "Rutile grade", "Food safe", "UV stable"]
        },
        {
          id: 14,
          name: "Industrial Polymer Resin",
          price: "$1,200/ton",
          minOrder: "10 tons",
          supplier: "Polymer Solutions",
          rating: 4.7,
          image: "/placeholder.jpg",
          specifications: ["High strength", "Chemical resistant", "Thermoplastic", "Recyclable"]
        },
        {
          id: 15,
          name: "Specialty Catalyst",
          price: "$15,000/kg",
          minOrder: "5 kg",
          supplier: "Catalyst Tech",
          rating: 4.9,
          image: "/placeholder.jpg",
          specifications: ["High activity", "Selective", "Stable", "Regenerable"]
        },
        {
          id: 16,
          name: "Organic Solvent Grade",
          price: "$850/barrel",
          minOrder: "20 barrels",
          supplier: "Solvent Specialists",
          rating: 4.6,
          image: "/placeholder.jpg",
          specifications: ["99.8% purity", "Low water content", "Distilled", "Analytical grade"]
        },
        {
          id: 17,
          name: "Flame Retardant Additive",
          price: "$3,200/ton",
          minOrder: "2 tons",
          supplier: "Safety Chemicals",
          rating: 4.8,
          image: "/placeholder.jpg",
          specifications: ["Halogen-free", "Low smoke", "Non-toxic", "Effective"]
        },
        {
          id: 18,
          name: "Pharmaceutical Excipient",
          price: "$4,500/ton",
          minOrder: "1 ton",
          supplier: "Pharma Materials",
          rating: 4.9,
          image: "/placeholder.jpg",
          specifications: ["USP grade", "Sterile", "Stable", "Biocompatible"]
        }
      ]
    }
  };

  const category = categories[slug];
  
  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-r ${category.color}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
                  {category.name}
                </h1>
                <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {category.description}
                </p>
              </div>
            </div>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-white/80 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{category.name}</span>
            </div>
          </div>
        </section>

        {/* Filter and Sort Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Showing {category.products.length} products
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">View:</span>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-blue-50 text-blue-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group animate-slide-up hover-lift bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                      ⭐ {product.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xl font-bold text-blue-600">{product.price}</div>
                      <div className="text-sm text-gray-500">MOQ: {product.minOrder}</div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      by <span className="font-semibold">{product.supplier}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        View Details
                      </button>
                      <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Load More */}
        <section className="py-8 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg">
            Load More Products
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
