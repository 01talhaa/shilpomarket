'use client';
import Link from "next/link";
import { useState } from "react";
import HeroSearchbar from "./HeroSearchbar";

export default function Hero() {

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; opacity: 0; }
        .animate-gradient { 
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }
        .animate-orbit { animation: orbit 20s linear infinite; }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Enhanced Background with Modern Design */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
          
          {/* Dynamic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-purple-900/20"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 hero-grid opacity-30"></div>
          
          {/* Modern Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: "2s"}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: "4s"}}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20">
            <div className="w-4 h-4 bg-blue-400/40 rounded-full animate-float"></div>
          </div>
          <div className="absolute top-40 right-32">
            <div className="w-3 h-3 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
          </div>
          <div className="absolute bottom-32 left-40">
            <div className="w-5 h-5 bg-cyan-400/40 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
          </div>
          
          {/* Modern Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          {/* Orbiting Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute animate-orbit">
                <div className="w-2 h-2 bg-blue-400/60 rounded-full"></div>
              </div>
              <div className="absolute animate-orbit" style={{animationDelay: "10s", animationDirection: "reverse"}}>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              {/* Modern Badge */}
              <div className="mb-4 mt-8">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium animate-slide-down border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Powering Global Industry Since 2020
                </span>
              </div>

              {/* Hero Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-shadow">
                Industrial Raw Materials.{" "}
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-xl mb-8 md:mb-12 text-slate-200 leading-relaxed max-w-4xl mx-auto font-light">
                Connect with verified suppliers of steel, chemicals, textiles, and advanced materials. 
                <span className="block mt-1 md:mt-2 text-blue-200">
                  Streamline your procurement process with our secure platform.
                </span>
              </p>

              <HeroSearchbar />

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-16">
                <Link
                  href="/products"
                  className="group relative bg-white text-slate-900 px-6 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-semibold text-sm md:text-lg hover:bg-slate-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    🔍 Explore Materials
                    <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </Link>
                <Link
                  href="/sellers"
                  className="group relative glass-effect text-white px-6 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-semibold text-sm md:text-lg hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 border-white/30 hover:border-white/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    🏪 Find Suppliers
                    <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </div>
              
              {/* Trust Indicators - Enhanced */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { icon: "🔒", text: "Secure", desc: "256-bit Enc." },
                  { icon: "✅", text: "Verified", desc: "Suppliers" },
                  { icon: "📈", text: "Analytics", desc: "Real-time" },
                  { icon: "🌐", text: "Global", desc: "150+ Countries" },
                ].map((item, index) => (
                  <div key={index} className="animate-scale-in group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="glass-effect p-3 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/15 transition-all duration-300">
                      <div className="text-xl md:text-3xl mb-1 md:mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <div className="text-xs md:text-sm font-semibold text-white mb-0.5">{item.text}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}