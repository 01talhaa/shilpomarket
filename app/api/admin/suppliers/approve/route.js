import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Supplier from '@/models/Supplier';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { supplierId, action, reason } = body;

    if (!supplierId || !action) {
      return NextResponse.json(
        {
          success: false,
          message: 'Supplier ID and action are required'
        },
        { status: 400 }
      );
    }

    const supplier = await Supplier.findById(supplierId);

    if (!supplier) {
      return NextResponse.json(
        {
          success: false,
          message: 'Supplier not found'
        },
        { status: 404 }
      );
    }

    if (action === 'approve') {
      supplier.isApproved = true;
      supplier.approvedAt = new Date();
      supplier.rejectionReason = null;
      await supplier.save();

      return NextResponse.json(
        {
          success: true,
          message: 'Supplier approved successfully',
          data: supplier.getPublicProfile()
        },
        { status: 200 }
      );
    } else if (action === 'reject') {
      supplier.isApproved = false;
      supplier.rejectionReason = reason || 'Not specified';
      await supplier.save();

      return NextResponse.json(
        {
          success: true,
          message: 'Supplier rejected',
          data: supplier.getPublicProfile()
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid action'
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Approve supplier error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error'
      },
      { status: 500 }
    );
  }
}
