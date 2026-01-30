import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Product from '@/models/Product';
import { verifyToken } from '@/lib/tokenUtils';

// GET - Fetch single product by ID
export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = params;
    
    const product = await Product.findById(id)
      .populate('supplier', 'firstName lastName companyName email phone profileImage location tradeLicense verified')
      .lean();

    if (!product) {
      return NextResponse.json({
        success: false,
        message: 'Product not found'
      }, { status: 404 });
    }

    // Increment view count
    await Product.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });

    return NextResponse.json({
      success: true,
      product
    }, { status: 200 });

  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Server error'
    }, { status: 500 });
  }
}

// PUT - Update product
export async function PUT(request, { params }) {
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

    const { id } = params;
    const body = await request.json();

    // Verify product belongs to this supplier
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({
        success: false,
        message: 'Product not found'
      }, { status: 404 });
    }

    if (product.supplier.toString() !== decoded.id) {
      return NextResponse.json({
        success: false,
        message: 'Unauthorized to update this product'
      }, { status: 403 });
    }

    // Prepare update data
    const updateData = {
      name: body.name,
      description: body.description,
      category: body.category,
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
      location: body.origin || '',
      shipping: {
        deliveryTime: body.leadTime ? `${body.leadTime} days` : body.shipping?.deliveryTime || '7-14 business days',
        shippingCost: body.shipping?.shippingCost || body.shippingCost || 'Calculated at checkout',
        freeShippingThreshold: body.shipping?.freeShippingThreshold || body.freeShippingThreshold || 0,
        international: body.shipping?.international || body.internationalShipping || false
      }
    };

    // Update product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    console.log('Product updated:', id);

    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct
    }, { status: 200 });

  } catch (error) {
    console.error('Update product error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to update product'
    }, { status: 500 });
  }
}

// DELETE - Delete product
export async function DELETE(request, { params }) {
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

    const { id } = params;

    // Verify product belongs to this supplier
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({
        success: false,
        message: 'Product not found'
      }, { status: 404 });
    }

    if (product.supplier.toString() !== decoded.id) {
      return NextResponse.json({
        success: false,
        message: 'Unauthorized to delete this product'
      }, { status: 403 });
    }

    // Soft delete - mark as inactive
    await Product.findByIdAndUpdate(id, { isActive: false });

    console.log('Product deleted:', id);

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Delete product error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to delete product'
    }, { status: 500 });
  }
}
