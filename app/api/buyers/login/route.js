import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Buyer from '@/models/Buyer';
import { generateToken, generateRefreshToken } from '@/lib/tokenUtils';

export async function POST(request) {
  try {
    console.log('Connecting to database...');
    await connectDB();
    console.log('Database connected');

    const body = await request.json();
    console.log('Login request for:', body.email);
    
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide email and password'
        },
        { status: 400 }
      );
    }

    // Find buyer and include password
    const buyer = await Buyer.findOne({ email }).select('+password');

    if (!buyer) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email or password'
        },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await buyer.matchPassword(password);

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email or password'
        },
        { status: 401 }
      );
    }

    // Check if account is active
    if (!buyer.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated. Please contact support.'
        },
        { status: 403 }
      );
    }

    // Generate tokens
    const token = generateToken(buyer._id, 'buyer');
    const refreshToken = generateRefreshToken(buyer._id, 'buyer');

    // Update last login and refresh token
    buyer.lastLogin = Date.now();
    buyer.refreshToken = refreshToken;
    await buyer.save();

    // Get public profile
    const buyerData = buyer.getPublicProfile();

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          buyer: buyerData,
          token,
          refreshToken
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error during login',
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
