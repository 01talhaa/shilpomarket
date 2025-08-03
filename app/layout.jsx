
import "./globals.css"

const SEO = {
  title: "ShilpoMarket - B2B Raw Materials Trading Platform | Suppliers, Buyers, Manufacturers, Exporters, Importers, Distributors, Wholesalers, Retailers, Agents, Brokers, Sourcing, Procurement, Bulk, OEM, Supplier Directory, Verified Sellers, Secure Payments, Fast Delivery, Best Prices, Quality Assurance, Sustainable, Eco-friendly, Textile, Chemicals, Metals, Plastics, Agriculture, Construction, Electronics, Machinery, Packaging, Logistics, Supply Chain, Business, Commerce, Trade, Procurement, Distribution, Retail, Global, International, Professional, Trusted, Reliable, Modern, 2025, Latest, Advanced, Updated, Trending, Top, Popular, Search, Find, Discover, Connect, Network, Platform, Portal, Solutions, Services, Opportunities, Deals, Offers, Discounts, B2B Platform, Raw Materials Trading, ShilpoMarket, Marketplace, Industrial, Manufacturing, Export, Import, Sourcing, Bulk, OEM, Supplier Directory, Verified Sellers, Secure Payments, Fast Delivery, Best Prices, Quality Assurance, Sustainable, Eco-friendly, Textile, Chemicals, Metals, Plastics, Agriculture, Construction, Electronics, Machinery, Packaging, Logistics, Supply Chain, Business, Commerce, Trade, Procurement, Distribution, Retail, Global, International, Professional, Trusted, Reliable, Modern, 2025, Latest, Advanced, Updated, Trending, Top, Popular, Search, Find, Discover, Connect, Network, Platform, Portal, Solutions, Services, Opportunities, Deals, Offers, Discounts, B2B Platform, Raw Materials Trading, ShilpoMarket, MSME, SME, Enterprise, Startup, E-commerce, Digital Marketplace, Online Trading, B2B E-commerce, B2B Portal, B2B Network, B2B Directory, B2B Suppliers, B2B Buyers, B2B Products, B2B Services, B2B Solutions, B2B Opportunities, B2B Deals, B2B Offers, B2B Discounts, B2B Wholesale, B2B Retail, B2B Export, B2B Import, B2B Sourcing, B2B Procurement, B2B Distribution, B2B Manufacturing, B2B Industrial, B2B Construction, B2B Electronics, B2B Machinery, B2B Packaging, B2B Logistics, B2B Supply Chain, B2B Agriculture, B2B Chemicals, B2B Metals, B2B Plastics, B2B Textile, B2B Eco-friendly, B2B Sustainable, B2B Quality Assurance, B2B Secure Payments, B2B Fast Delivery, B2B Best Prices, B2B Verified Sellers, B2B Trusted, B2B Reliable, B2B Professional, B2B Modern, B2B Latest, B2B Advanced, B2B Updated, B2B Trending, B2B Top, B2B Popular, B2B Search, B2B Find, B2B Discover, B2B Connect, B2B Network, B2B Platform, B2B Portal, B2B Solutions, B2B Services, B2B Opportunities, B2B Deals, B2B Offers, B2B Discounts, B2B Platform, Raw Materials Trading, ShilpoMarket",
  description: "ShilpoMarket is the most advanced, comprehensive, and professional B2B platform for raw materials trading, sourcing, procurement, and business networking. Connect with verified suppliers, manufacturers, exporters, importers, distributors, wholesalers, retailers, agents, and brokers for the best prices, secure payments, fast delivery, and quality assurance. Discover opportunities in India, Bangladesh, Pakistan, Nepal, Asia, and globally for all your industrial, manufacturing, construction, electronics, machinery, packaging, logistics, supply chain, agriculture, chemicals, metals, plastics, textile, eco-friendly, and sustainable business needs.",
  keywords: "B2B, raw materials, suppliers, buyers, manufacturers, exporters, importers, distributors, wholesalers, retailers, agents, brokers, sourcing, procurement, bulk, OEM, supplier directory, verified sellers, secure payments, fast delivery, best prices, quality assurance, sustainable, eco-friendly, textile, chemicals, metals, plastics, agriculture, construction, electronics, machinery, packaging, logistics, supply chain, business, commerce, trade, procurement, distribution, retail, global, international, professional, trusted, reliable, modern, 2025, latest, advanced, updated, trending, top, popular, search, find, discover, connect, network, platform, portal, solutions, services, opportunities, deals, offers, discounts, MSME, SME, enterprise, startup, e-commerce, digital marketplace, online trading, B2B e-commerce, B2B portal, B2B network, B2B directory, B2B suppliers, B2B buyers, B2B products, B2B services, B2B solutions, B2B opportunities, B2B deals, B2B offers, B2B discounts, B2B wholesale, B2B retail, B2B export, B2B import, B2B sourcing, B2B procurement, B2B distribution, B2B manufacturing, B2B industrial, B2B construction, B2B electronics, B2B machinery, B2B packaging, B2B logistics, B2B supply chain, B2B agriculture, B2B chemicals, B2B metals, B2B plastics, B2B textile, B2B eco-friendly, B2B sustainable, B2B quality assurance, B2B secure payments, B2B fast delivery, B2B best prices, B2B verified sellers, B2B trusted, B2B reliable, B2B professional, B2B modern, B2B latest, B2B advanced, B2B updated, B2B trending, B2B top, B2B popular, B2B search, B2B find, B2B discover, B2B connect, B2B network, B2B platform, B2B portal, B2B solutions, B2B services, B2B opportunities, B2B deals, B2B offers, B2B discounts, B2B platform, raw materials trading, ShilpoMarket",
  url: "https://shilpomarket.com",
  image: "https://shilpomarket.com/placeholder-logo.png",
  author: "ShilpoMarket Team",
  publisher: "ShilpoMarket",
  copyright: "ShilpoMarket © 2025",
  language: "en",
  region: "IN, BD, PK, NP, Asia, Global",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SEO.title,
  "url": SEO.url,
  "description": SEO.description,
  "image": SEO.image,
  "author": SEO.author,
  "publisher": SEO.publisher,
  "copyrightHolder": SEO.copyright,
  "inLanguage": SEO.language,
  "areaServed": SEO.region,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SEO.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="generator" content={SEO.generator} />
        <meta name="author" content={SEO.author} />
        <meta name="publisher" content={SEO.publisher} />
        <meta name="copyright" content={SEO.copyright} />
        <meta name="language" content={SEO.language} />
        <meta name="region" content={SEO.region} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SEO.url} />
        <link rel="icon" type="image/png" href="/logo3.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/logo3.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/logo3.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/logo3.png" sizes="256x256" />
        <link rel="shortcut icon" type="image/png" href="/logo3.png" />
        <link rel="apple-touch-icon" href="/logo3.png" sizes="180x180" />
        <meta name="msapplication-TileImage" content="/logo3.png" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="theme-color" content="#0a192f" />
        <meta name="application-name" content="ShilpoMarket" />
        <meta name="apple-mobile-web-app-title" content="ShilpoMarket" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        {/* Open Graph tags */}
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.url} />
        <meta property="og:image" content={SEO.image} />
        <meta property="og:site_name" content="ShilpoMarket" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:author" content={SEO.author} />
        <meta property="og:publisher" content={SEO.publisher} />
        <meta property="og:email" content="info@shilpomarket.com" />
        <meta property="og:phone_number" content="+91-0000000000" />
        <meta property="og:country-name" content="India, Bangladesh, Pakistan, Nepal, Asia, Global" />
        <meta property="og:industry" content="B2B, Marketplace, Trading, Sourcing, Procurement, Manufacturing, Wholesale, Retail, Export, Import, Distribution, Logistics, Supply Chain, Industrial, Construction, Electronics, Machinery, Packaging, Agriculture, Chemicals, Metals, Plastics, Textile, Eco-friendly, Sustainable, MSME, SME, Enterprise, Startup, E-commerce, Digital Marketplace, Online Trading" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.image} />
        <meta name="twitter:site" content="@ShilpoMarket" />
        <meta name="twitter:creator" content="@ShilpoMarket" />
        <meta name="twitter:label1" content="Business Type" />
        <meta name="twitter:data1" content="B2B, Marketplace, Trading, Sourcing, Procurement, Manufacturing, Wholesale, Retail, Export, Import, Distribution, Logistics, Supply Chain, Industrial, Construction, Electronics, Machinery, Packaging, Agriculture, Chemicals, Metals, Plastics, Textile, Eco-friendly, Sustainable, MSME, SME, Enterprise, Startup, E-commerce, Digital Marketplace, Online Trading" />
        <meta name="twitter:label2" content="Region" />
        <meta name="twitter:data2" content="India, Bangladesh, Pakistan, Nepal, Asia, Global" />
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {/* Organization Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ShilpoMarket",
          "url": SEO.url,
          "logo": SEO.image,
          "email": "info@shilpomarket.com",
          "telephone": "+91-0000000000",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Asia",
            "addressLocality": "Kolkata",
            "postalCode": "700000"
          },
          "sameAs": [
            "https://facebook.com/shilpomarket",
            "https://twitter.com/shilpomarket",
            "https://linkedin.com/company/shilpomarket"
          ]
        }) }} />
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": SEO.url
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Marketplace",
              "item": `${SEO.url}/marketplace`
            }
          ]
        }) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
