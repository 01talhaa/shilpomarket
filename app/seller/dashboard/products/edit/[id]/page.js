'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../../../../contexts/AuthContext';
import { API_ENDPOINTS } from '../../../../../../lib/api';
import {
  ArrowLeft,
  X,
  Plus,
  Camera,
  LogOut,
  Menu,
  Package,
  ShoppingCart,
  DollarSign,
  Settings,
  LayoutDashboard,
  Upload,
  Loader2
} from 'lucide-react';

const EditProductPage = ({ params }) => {
  const unwrappedParams = use(params);
  const { user, loading: authLoading, apiCall, uploadProfileImage, getProfileImage, logout } = useAuth();
  const router = useRouter();
  const productId = unwrappedParams.id;
  const [profileImage, setProfileImage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    minOrder: '',
    maxOrder: '',
    unit: 'pieces',
    stock: '',
    sku: '',
    specifications: {},
    images: [],
    displayImage: null,
    tags: [],
    origin: '',
    leadTime: '',
    shippingCost: '',
    freeShippingThreshold: '',
    internationalShipping: false
  });

  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingDisplayImage, setUploadingDisplayImage] = useState(false);
  const [currentSpec, setCurrentSpec] = useState({ key: '', value: '' });
  const [currentTag, setCurrentTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const displayImageInputRef = useRef(null);

  const sidebarItems = [
    { name: 'Dashboard', href: '/seller/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/seller/dashboard/products', icon: Package },
    { name: 'Orders', href: '/seller/dashboard/orders', icon: ShoppingCart },
    { name: 'Transactions', href: '/seller/dashboard/transactions', icon: DollarSign },
    { name: 'Settings', href: '/seller/dashboard/settings', icon: Settings }
  ];

  const categories = [
    'Metals & Alloys',
    'Plastics & Polymers',
    'Chemicals',
    'Textiles',
    'Electronic Materials',
    'Construction Materials',
    'Food & Agriculture',
    'Energy & Fuel',
    'Machinery & Equipment',
    'Automotive Parts',
    'Electronics & Components',
    'Other'
  ];

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      router.push('/auth/login');
      return;
    }

    if (user.accountType !== 'supplier') {
      router.push('/buyer/dashboard');
      return;
    }

    fetchProduct();
    fetchProfileImage();
  }, [user, authLoading, productId]);

  const fetchProduct = async () => {
    try {
      const response = await apiCall(API_ENDPOINTS.PRODUCTS_GET(productId));
      if (response.ok) {
        const data = await response.json();
        const product = data.product || data;
        
        // Check if this product belongs to the current user
        const productSupplierId = product.supplier?._id || product.supplier || product.supplierId || product.supplier_id;
        if (productSupplierId !== user._id) {
          alert('You do not have permission to edit this product');
          router.push('/seller/dashboard/products');
          return;
        }

        const primaryImageObj = product.images?.find(img => img.url === product.primaryImage) || null;
        
        setFormData({
          name: product.name || '',
          description: product.description || '',
          category: product.category || '',
          price: product.price || '',
          minOrder: product.minOrder || product.min_order || '',
          maxOrder: product.maxOrder || product.max_order || '',
          unit: product.unit || 'pieces',
          stock: product.stock || product.stockQuantity || '',
          sku: product.sku || '',
          specifications: product.specifications || {},
          images: product.images || [],
          displayImage: primaryImageObj,
          tags: product.tags || [],
          origin: product.origin || product.location || '',
          leadTime: product.leadTime || product.lead_time || '',
          shippingCost: product.shipping?.shippingCost || '',
          freeShippingThreshold: product.shipping?.freeShippingThreshold || '',
          internationalShipping: product.shipping?.international || false
        });
      } else {
        alert('Failed to load product');
        router.push('/seller/dashboard/products');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Error loading product');
      router.push('/seller/dashboard/products');
    } finally {
      setLoading(false);
    }
  };

  const fetchProfileImage = async () => {
    try {
      const result = await getProfileImage();
      if (result.success && result.imageUrl) {
        setProfileImage(result.imageUrl);
      }
    } catch (error) {
      console.error('Error fetching profile image:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const result = await uploadProfileImage(file);
      if (result.success) {
        setProfileImage(result.data.imageUrl);
      }
    } catch (error) {
      console.error('Error uploading image');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageFileUpload = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);

    try {
      const uploadedImages = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Create FormData
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', 'products');
        formData.append('resourceType', file.type.startsWith('video/') ? 'video' : 'image');

        // Upload to Cloudinary via API
        const response = await apiCall(API_ENDPOINTS.UPLOAD_FILE(), {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const result = await response.json();
          uploadedImages.push({
            url: result.data.url,
            publicId: result.data.publicId,
            resourceType: result.data.resourceType
          });
        } else {
          const error = await response.json();
          alert(`Failed to upload ${file.name}: ${error.message}`);
        }
      }

      if (uploadedImages.length > 0) {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...uploadedImages]
        }));
        alert(`Successfully uploaded ${uploadedImages.length} file(s)`);
      }

    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Error uploading images');
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    }
  };

  const handleDisplayImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Display image must be an image file');
      return;
    }

    setUploadingDisplayImage(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'products/display');
      formData.append('resourceType', 'image');

      const response = await apiCall(API_ENDPOINTS.UPLOAD_FILE(), {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        setFormData(prev => ({
          ...prev,
          displayImage: {
            url: result.data.url,
            publicId: result.data.publicId,
            resourceType: 'image'
          }
        }));
        alert('Display image uploaded successfully');
      } else {
        const error = await response.json();
        alert(`Failed to upload display image: ${error.message}`);
      }
    } catch (error) {
      console.error('Error uploading display image:', error);
      alert('Error uploading display image');
    } finally {
      setUploadingDisplayImage(false);
      if (displayImageInputRef.current) {
        displayImageInputRef.current.value = '';
      }
    }
  };

  const handleRemoveDisplayImage = async () => {
    if (formData.displayImage?.publicId) {
      try {
        await apiCall(API_ENDPOINTS.DELETE_FILE(), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ publicId: formData.displayImage.publicId })
        });
      } catch (error) {
        console.error('Error deleting display image from Cloudinary:', error);
      }
    }

    setFormData(prev => ({ ...prev, displayImage: null }));
  };

  const handleRemoveImage = async (index) => {
    const image = formData.images[index];
    
    if (image.publicId) {
      try {
        await apiCall(API_ENDPOINTS.DELETE_FILE(), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ publicId: image.publicId })
        });
      } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
      }
    }

    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleAddSpecification = () => {
    if (currentSpec.key.trim() && currentSpec.value.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [currentSpec.key.trim()]: currentSpec.value.trim()
        }
      }));
      setCurrentSpec({ key: '', value: '' });
    }
  };

  const handleRemoveSpecification = (key) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[key];
      return {
        ...prev,
        specifications: newSpecs
      };
    });
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        minOrder: formData.minOrder ? parseInt(formData.minOrder) : undefined,
        maxOrder: formData.maxOrder ? parseInt(formData.maxOrder) : undefined,
        leadTime: formData.leadTime ? parseInt(formData.leadTime) : undefined,
        primaryImage: formData.displayImage?.url || formData.displayImage || (formData.images.length > 0 ? (formData.images[0].url || formData.images[0]) : null),
        shipping: {
          shippingCost: formData.shippingCost || 'Calculated at checkout',
          freeShippingThreshold: formData.freeShippingThreshold ? parseFloat(formData.freeShippingThreshold) : 0,
          international: formData.internationalShipping || false,
          deliveryTime: formData.leadTime ? `${formData.leadTime} days` : '7-14 business days'
        }
      };

      const response = await apiCall(API_ENDPOINTS.PRODUCTS_UPDATE(productId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        alert('Product updated successfully!');
        router.push('/seller/dashboard/products');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Seller Portal</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={profileImage || '/placeholder-user.jpg'}
                  alt="Profile"
                  className="h-12 w-12 rounded-full object-cover cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                  <Camera className="h-3 w-3 text-white" />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.firstName || user?.first_name || 'Seller'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.companyName || user?.company_name || 'Company'}
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => {
              const isActive = item.href === '/seller/dashboard/products';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="flex items-center space-x-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <Link href="/seller/dashboard/products">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Products</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
              <p className="text-gray-600 mt-2">Update your product information</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                    <input
                      type="text"
                      value={formData.sku}
                      onChange={(e) => handleInputChange('sku', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Pricing & Inventory */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing & Inventory</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price per Unit *</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <select
                      value={formData.unit}
                      onChange={(e) => handleInputChange('unit', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="pieces">Pieces</option>
                      <option value="kg">Kilograms</option>
                      <option value="tons">Tons</option>
                      <option value="meters">Meters</option>
                      <option value="liters">Liters</option>
                      <option value="boxes">Boxes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity *</label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => handleInputChange('stock', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Order</label>
                    <input
                      type="number"
                      value={formData.minOrder}
                      onChange={(e) => handleInputChange('minOrder', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Order</label>
                    <input
                      type="number"
                      value={formData.maxOrder}
                      onChange={(e) => handleInputChange('maxOrder', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lead Time (days)</label>
                    <input
                      type="number"
                      value={formData.leadTime}
                      onChange={(e) => handleInputChange('leadTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Display Image */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Display Image *</h3>
                <p className="text-sm text-gray-600 mb-4">This image will be shown in product listings and search results</p>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="file"
                      ref={displayImageInputRef}
                      accept="image/*"
                      onChange={handleDisplayImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => displayImageInputRef.current?.click()}
                      disabled={uploadingDisplayImage}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      {uploadingDisplayImage ? 'Uploading...' : formData.displayImage ? 'Change Display Image' : 'Upload Display Image'}
                    </button>
                    {uploadingDisplayImage && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading display image...
                      </div>
                    )}
                  </div>
                  
                  {formData.displayImage && (
                    <div className="relative inline-block">
                      <img 
                        src={formData.displayImage.url || formData.displayImage} 
                        alt="Display" 
                        className="w-48 h-48 object-cover rounded-lg border-2 border-green-500" 
                      />
                      <button
                        type="button"
                        onClick={handleRemoveDisplayImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                        DISPLAY IMAGE
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Images */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Images/Videos</h3>
                <p className="text-sm text-gray-600 mb-4">Upload additional images and videos of your product</p>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="file"
                      ref={imageInputRef}
                      multiple
                      accept="image/*,video/*"
                      onChange={handleImageFileUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => imageInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      {uploadingImage ? 'Uploading...' : 'Upload Files'}
                    </button>
                    {uploadingImage && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading to Cloudinary...
                      </div>
                    )}
                  </div>
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => {
                        const imageUrl = image.url || image;
                        return (
                          <div key={index} className="relative group border rounded-lg overflow-hidden">
                            {image.resourceType === 'video' ? (
                              <video src={imageUrl} className="w-full h-32 object-cover" controls />
                            ) : (
                              <img src={imageUrl} alt={`Product ${index + 1}`} className="w-full h-32 object-cover" />
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            {image.resourceType && (
                              <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                {image.resourceType === 'video' ? '📹 Video' : '🖼️ Image'}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={currentSpec.key}
                      onChange={(e) => setCurrentSpec(prev => ({ ...prev, key: e.target.value }))}
                      placeholder="Specification name"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={currentSpec.value}
                      onChange={(e) => setCurrentSpec(prev => ({ ...prev, value: e.target.value }))}
                      placeholder="Specification value"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddSpecification}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  {Object.keys(formData.specifications).length > 0 && (
                    <div className="space-y-2">
                      {Object.entries(formData.specifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <span>
                            <strong>{key}:</strong> {value}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSpecification(key)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Enter tag"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                        >
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Origin Country</label>
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => handleInputChange('origin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Cost</label>
                    <input
                      type="text"
                      value={formData.shippingCost}
                      onChange={(e) => handleInputChange('shippingCost', e.target.value)}
                      placeholder="e.g., $50 or Calculated at checkout"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Free Shipping Threshold ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.freeShippingThreshold}
                      onChange={(e) => handleInputChange('freeShippingThreshold', e.target.value)}
                      placeholder="e.g., 1000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.internationalShipping}
                        onChange={(e) => handleInputChange('internationalShipping', e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">International Shipping Available</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors font-medium"
                >
                  {isSubmitting ? 'Updating...' : 'Update Product'}
                </button>
                <Link href="/seller/dashboard/products">
                  <button
                    type="button"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default EditProductPage;
