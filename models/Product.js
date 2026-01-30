import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
    maxlength: [5000, 'Description cannot exceed 5000 characters']
  },
  
  // Pricing
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  unit: {
    type: String,
    required: [true, 'Unit is required'],
    default: 'tons',
    enum: ['kg', 'tons', 'pieces', 'meters', 'liters', 'units', 'boxes', 'pallets']
  },
  
  // Order Limits
  minOrder: {
    type: Number,
    required: [true, 'Minimum order quantity is required'],
    min: [0, 'Minimum order cannot be negative']
  },
  maxOrder: {
    type: Number,
    default: 10000
  },
  
  // Stock Management
  inStock: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, 'Stock quantity cannot be negative']
  },
  
  // Category
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  categoryId: {
    type: Number,
    required: [true, 'Category ID is required']
  },
  
  // Images and Videos
  images: [{
    url: {
      type: String,
      required: true
    },
    publicId: {
      type: String
    },
    resourceType: {
      type: String,
      enum: ['image', 'video'],
      default: 'image'
    }
  }],
  
  // Primary image for thumbnails
  primaryImage: {
    type: String
  },
  
  // Supplier Information
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: [true, 'Supplier is required']
  },
  supplierName: {
    type: String,
    required: true
  },
  
  // Location
  location: {
    type: String,
    trim: true
  },
  
  // Specifications (flexible key-value pairs)
  specifications: {
    type: Map,
    of: String,
    default: {}
  },
  
  // Shipping Information
  shipping: {
    deliveryTime: {
      type: String,
      default: '7-14 business days'
    },
    shippingCost: {
      type: String,
      default: 'Calculated at checkout'
    },
    freeShippingThreshold: {
      type: Number,
      default: 0
    },
    international: {
      type: Boolean,
      default: false
    }
  },
  
  // Ratings and Reviews
  rating: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5']
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  
  // Product Status
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  
  // Analytics
  viewCount: {
    type: Number,
    default: 0
  },
  orderCount: {
    type: Number,
    default: 0
  },
  
  // Additional Fields
  tags: [{
    type: String,
    trim: true
  }],
  
  // SEO
  slug: {
    type: String,
    unique: true,
    sparse: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
productSchema.index({ supplier: 1, isActive: 1 });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ price: 1 });
productSchema.index({ rating: -1 });
productSchema.index({ createdAt: -1 });

// Generate slug before saving
productSchema.pre('save', function(next) {
  if (this.isModified('name') && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    // Add ID to ensure uniqueness
    if (this._id) {
      this.slug = `${this.slug}-${this._id.toString().slice(-6)}`;
    }
  }
  next();
});

// Method to increment view count
productSchema.methods.incrementViewCount = async function() {
  this.viewCount += 1;
  await this.save();
};

// Method to update stock after order
productSchema.methods.updateStock = async function(quantity) {
  if (this.stockQuantity >= quantity) {
    this.stockQuantity -= quantity;
    this.orderCount += 1;
    if (this.stockQuantity === 0) {
      this.inStock = false;
    }
    await this.save();
    return true;
  }
  return false;
};

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
