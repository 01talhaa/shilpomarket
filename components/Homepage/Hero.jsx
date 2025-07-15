import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Industrial Material Inspired Elements */}
        <div className="absolute top-20 left-20 w-1 h-32 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-40 left-40 w-32 h-1 bg-gradient-to-r from-blue-400/20 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-20 w-1 h-24 bg-gradient-to-t from-purple-400/20 to-transparent animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-1 bg-gradient-to-l from-purple-400/20 to-transparent animate-pulse-slow" style={{ animationDelay: "3s" }}></div>

        {/* Sophisticated Geometric Elements */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400/30 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400/30 transform rotate-45 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border border-white/20 transform rotate-45 animate-pulse-slow" style={{ animationDelay: "2.5s" }}></div>
        
        {/* Subtle Hexagonal Pattern */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 opacity-10">
          <div className="w-full h-full border border-white/30 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 opacity-10">
          <div className="w-full h-full border border-blue-400/40 transform rotate-45"></div>
        </div>

        {/* Modern Particle Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-float top-1/4 left-1/4"></div>
          <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float top-1/2 left-1/2" style={{ animationDelay: "2s" }}></div>
          <div className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float top-3/4 left-3/4" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium animate-slide-down border border-white/20">
                � Powering Global Industry Since 2020
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow">
              Industrial Raw Materials.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Connect with verified suppliers of steel, chemicals, textiles, and advanced materials. 
              Streamline your procurement process with our secure B2B platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/products"
                className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-500 transform hover:scale-105 hover:shadow-xl border border-white/20"
              >
                <span className="flex items-center justify-center">
                  � Explore Materials
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link
                href="/sellers"
                className="group glass-effect text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl border-2 border-white/30"
              >
                <span className="flex items-center justify-center">
                  � Find Suppliers
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
            </div>

            {/* Professional Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "🔒", text: "Secure Trading" },
                { icon: "✅", text: "Verified Suppliers" },
                { icon: "�", text: "Market Analytics" },
                { icon: "🌐", text: "Global Network" },
              ].map((item, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-2xl mb-2 opacity-80">{item.icon}</div>
                  <div className="text-sm font-medium text-slate-300">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}