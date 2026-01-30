"use client"
import { useState, useEffect, use } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import ProductHeader from "../../../components/ProductHeader"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export default function ProductDetailPage({ params }) {
  const unwrappedParams = use(params);
  const routeParams = useParams();
  const productId = unwrappedParams?.id || routeParams?.id;
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(5)
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
      
      if (response.ok) {
        const data = await response.json();
        const fetchedProduct = data.product;
        setProduct(fetchedProduct);
        setQuantity(fetchedProduct.minOrder || 5);
        
        // Fetch related products from same category
        if (fetchedProduct.category) {
          fetchRelatedProducts(fetchedProduct.category, productId);
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async (category, excludeId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products?category=${category}&limit=4`);
      if (response.ok) {
        const data = await response.json();
        setRelatedProducts((data.products || []).filter(p => p._id !== excludeId).slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  if (loading) {
    return (
      <>
        <ProductHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <ProductHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
            <Link href="/products" className="text-blue-600 hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
      </>
    );
  }

  const totalPrice = quantity * product.price;
  const images = product.images?.length > 0 
    ? product.images.map(img => img.url) 
    : ['/placeholder.svg'];
  
  // Convert Map to object for specifications
  const specifications = product.specifications instanceof Map 
    ? Object.fromEntries(product.specifications)
    : product.specifications || {};
  
  const supplier = {
    name: product.supplierName || 'Unknown Supplier',
    logo: product.supplier?.profileImage?.url || '/placeholder.svg',
    rating: product.supplier?.rating || 4.5,
    email: product.supplier?.email || '',
    phone: product.supplier?.phone || '',
    location: product.location || product.supplier?.address || 'N/A',
    verified: product.supplier?.isApproved || false,
    companyName: product.supplier?.companyName || product.supplierName,
  }

  const relatedProductsData = relatedProducts.length > 0 ? relatedProducts : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHeader />
      
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <nav className="text-xs text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-800">{product.name}</span>
            </nav>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Product Images */}
          <div className="space-y-2">
            <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden max-w-md">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-1 max-w-md">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{product.category}</span>
                {product.verified && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">✓ Verified</span>
                )}
                {product.inStock && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">In Stock</span>
                )}
              </div>
              <h1 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h1>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span>{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <span>📍 {product.location}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ${product.price.toLocaleString()}/{product.unit}
              </div>
              <div className="text-xs text-gray-600">
                Minimum order: {product.minOrder} {product.unit} • Maximum: {product.maxOrder} {product.unit}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Quantity ({product.unit})</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                    className="w-7 h-7 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-xs"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(product.minOrder, Number.parseInt(e.target.value) || product.minOrder))
                    }
                    min={product.minOrder}
                    max={product.maxOrder}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.maxOrder, quantity + 1))}
                    className="w-7 h-7 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span>Total Price:</span>
                  <span className="text-blue-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link
                href={`/purchase/${product._id}?quantity=${quantity}`}
                className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block text-xs"
              >
                Request Quote
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <button className="border border-gray-300 text-gray-700 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors text-xs">
                  💬 Chat with Supplier
                </button>
                <button className="border border-gray-300 text-gray-700 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors text-xs">
                  ❤️ Add to Wishlist
                </button>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="bg-white rounded-lg border p-3">
              <h3 className="font-semibold text-gray-800 mb-2 text-xs">Supplier Information</h3>
              <div className="flex items-center space-x-2">
                <img src={supplier.logo || "/placeholder.svg"} alt={supplier.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-xs">{supplier.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span>⭐ {supplier.rating}</span>
                    <span>•</span>
                    <span>{supplier.reviews} reviews</span>
                    <span>•</span>
                    <span>Est. {supplier.established}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Response time: {supplier.responseTime}</div>
                </div>
                <Link
                  href={`/sellers/${supplier.name}`}
                  className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors text-xs"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="border-b">
            <div className="flex space-x-4 px-3">
              {["description", "specifications", "shipping", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium capitalize transition-colors text-xs ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-xs">{product.description}</p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.keys(specifications).length > 0 ? (
                  Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700 text-xs">{key}:</span>
                      <span className="text-gray-600 text-xs">{value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-xs">No specifications available</p>
                )}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-xs">Delivery Time:</span>
                  <span className="text-gray-600 text-xs">{product.shipping?.deliveryTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-xs">Shipping Cost:</span>
                  <span className="text-gray-600 text-xs">{product.shipping?.shippingCost}</span>
                </div>
                {product.shipping?.freeShippingThreshold > 0 && (
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-medium text-gray-700 text-xs">Free Shipping Above:</span>
                    <span className="text-gray-600 text-xs">${product.shipping.freeShippingThreshold}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-xs">International:</span>
                  <span className="text-gray-600 text-xs">{product.shipping?.international ? 'Available' : 'Not Available'}</span>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-gray-800">{product.rating}</div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">{"⭐".repeat(Math.floor(product.rating))}</div>
                    <div className="text-xs text-gray-600">{product.reviews} reviews</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-2">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-800 text-xs">John Doe</div>
                          <div className="text-xs text-gray-600">2 weeks ago</div>
                        </div>
                        <div className="flex text-yellow-500 text-xs">{"⭐".repeat(5)}</div>
                      </div>
                      <p className="text-gray-700 text-xs">
                        Excellent quality steel rods. Fast delivery and great customer service. Highly recommended for
                        construction projects.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProductsData.length > 0 && (
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedProductsData.map((relatedProduct) => (
                <Link
                  key={relatedProduct._id}
                  href={`/products/${relatedProduct._id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={relatedProduct.images?.[0]?.url || "/placeholder.svg"}
                      alt={relatedProduct.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                    In Stock
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">${relatedProduct.price}/{relatedProduct.unit}</span>
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span>{relatedProduct.rating || 'New'}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    MOQ: {relatedProduct.minOrder} {relatedProduct.unit}
                  </div>
                  <div className="text-xs text-gray-500">
                    {relatedProduct.supplierName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}
