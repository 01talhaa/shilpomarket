import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Supplier from '@/models/Supplier';
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

    // Find supplier and include password
    const supplier = await Supplier.findOne({ email }).select('+password');

    if (!supplier) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email or password'
        },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await supplier.matchPassword(password);

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
    if (!supplier.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated. Please contact support.'
        },
        { status: 403 }
      );
    }

    // Check if account is approved
    if (!supplier.isApproved) {
      return NextResponse.json(
        {
          success: false,
          message: 'Your account is pending approval. Please wait for admin approval before logging in.'
        },
        { status: 403 }
      );
    }

    // Generate tokens
    const token = generateToken(supplier._id, 'supplier');
    const refreshToken = generateRefreshToken(supplier._id, 'supplier');

    // Update last login and refresh token
    supplier.lastLogin = Date.now();
    supplier.refreshToken = refreshToken;
    await supplier.save();

    // Get public profile
    const supplierData = supplier.getPublicProfile();

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          supplier: supplierData,
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
