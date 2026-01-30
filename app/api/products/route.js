import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Product from '@/models/Product';
import Supplier from '@/models/Supplier';
import { verifyToken } from '@/lib/tokenUtils';

// GET - Fetch all products or supplier's products
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const supplierId = searchParams.get('supplierId');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const inStock = searchParams.get('inStock');
    const featured = searchParams.get('featured');
    const sort = searchParams.get('sort') || '-createdAt';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;

    let query = { isActive: true };

    // Filter by supplier
    if (supplierId) {
      query.supplier = supplierId;
    }

    // Filter by category
    if (category && category !== 'all') {
      query.category = category;
    }

    // Search by name or description
    if (search) {
      query.$text = { $search: search };
    }

    // Price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Stock filter
    if (inStock === 'true') {
      query.inStock = true;
    }

    // Featured filter
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Product.find(query)
        .populate('supplier', 'firstName lastName companyName email phone profileImage')
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      Product.countDocuments(query)
    ]);

    return NextResponse.json({
      success: true,
      products,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Get products error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Server error'
    }, { status: 500 });
  }
}

// POST - Create new product
export async function POST(request) {
  try {
    await connectDB();

    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({
        success: false,
        message: 'Authentication required'
      }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.type !== 'supplier') {
      return NextResponse.json({
        success: false,
        message: 'Invalid authentication'
      }, { status: 401 });
    }

    const body = await request.json();

    // Get supplier info
    const supplier = await Supplier.findById(decoded.id).select('firstName lastName companyName');
    if (!supplier) {
      return NextResponse.json({
        success: false,
        message: 'Supplier not found'
      }, { status: 404 });
    }

    // Prepare product data
    const productData = {
      name: body.name,
      description: body.description,
      category: body.category,
      categoryId: body.categoryId || 1,
      price: parseFloat(body.price),
      unit: body.unit || 'pieces',
      minOrder: body.minOrder ? parseInt(body.minOrder) : 1,
      maxOrder: body.maxOrder ? parseInt(body.maxOrder) : 10000,
      stockQuantity: body.stock ? parseInt(body.stock) : 0,
      inStock: body.stock ? parseInt(body.stock) > 0 : true,
      images: body.images || [],
      primaryImage: body.images && body.images.length > 0 ? body.images[0].url : null,
      specifications: body.specifications || {},
      tags: body.tags || [],
      supplier: decoded.id,
      supplierName: supplier.companyName || `${supplier.firstName} ${supplier.lastName}`,
      location: body.origin || '',
      shipping: {
        deliveryTime: body.leadTime ? `${body.leadTime} days` : '7-14 business days'
      }
    };

    const product = await Product.create(productData);
    
    console.log('Product created successfully:', product._id);

    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      product
    }, { status: 201 });

  } catch (error) {
    console.error('Create product error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to create product'
    }, { status: 500 });
  }
}
