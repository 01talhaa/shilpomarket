import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Supplier from '@/models/Supplier';
import Buyer from '@/models/Buyer';
import jwt from 'jsonwebtoken';
import { generateToken, generateRefreshToken } from '@/lib/tokenUtils';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { refreshToken } = body;

    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Refresh token is required'
        },
        { status: 400 }
      );
    }

    // Verify refresh token
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET);
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid or expired refresh token'
        },
        { status: 401 }
      );
    }

    // Find user based on type
    let user;
    if (decoded.type === 'supplier') {
      user = await Supplier.findById(decoded.id);
    } else if (decoded.type === 'buyer') {
      user = await Buyer.findById(decoded.id);
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid user type'
        },
        { status: 401 }
      );
    }

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found'
        },
        { status: 404 }
      );
    }

    // Check if the refresh token matches the one stored in database
    if (user.refreshToken !== refreshToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid refresh token'
        },
        { status: 401 }
      );
    }

    // Check if account is active
    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated'
        },
        { status: 403 }
      );
    }

    // Generate new tokens
    const newAccessToken = generateToken(user._id, decoded.type);
    const newRefreshToken = generateRefreshToken(user._id, decoded.type);

    // Update refresh token in database
    user.refreshToken = newRefreshToken;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Token refreshed successfully',
        token: newAccessToken,
        refreshToken: newRefreshToken
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error during token refresh'
      },
      { status: 500 }
    );
  }
}
