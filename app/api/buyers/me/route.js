import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Buyer from '@/models/Buyer';
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

    // Get buyer from database
    const buyer = await Buyer.findById(decoded.id);

    if (!buyer) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Buyer not found' 
        },
        { status: 404 }
      );
    }

    // Check if account is active
    if (!buyer.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated'
        },
        { status: 403 }
      );
    }

    // Get public profile
    const buyerData = buyer.getPublicProfile ? buyer.getPublicProfile() : buyer.toObject();
    delete buyerData.password;
    delete buyerData.refreshToken;

    return NextResponse.json({
      success: true,
      user: buyerData
    });
  } catch (error) {
    console.error('Get buyer profile error:', error);
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
