import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Supplier from '@/models/Supplier';
import { verifyToken } from '@/lib/tokenUtils';

export async function GET(request) {
  try {
    await connectDB();

    // Get token from Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { 
          success: false,
          message: 'No token provided' 
        },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid or expired token' 
        },
        { status: 401 }
      );
    }

    // Get supplier from database
    const supplier = await Supplier.findById(decoded.id);

    if (!supplier) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Supplier not found' 
        },
        { status: 404 }
      );
    }

    // Check if account is active
    if (!supplier.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated'
        },
        { status: 403 }
      );
    }

    // Get public profile
    const supplierData = supplier.getPublicProfile ? supplier.getPublicProfile() : supplier.toObject();
    delete supplierData.password;
    delete supplierData.refreshToken;

    return NextResponse.json({
      success: true,
      user: supplierData
    });
  } catch (error) {
    console.error('Get supplier profile error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Server error', 
        error: error.message 
      },
      { status: 500 }
    );
  }
}
