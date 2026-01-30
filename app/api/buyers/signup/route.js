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
    console.log('Request body:', { ...body, password: '[REDACTED]' });
    
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      companyName,
      tradeLicense,
      companyType,
      industry,
      website,
      employeeCount,
      annualRevenueRange,
      address
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide all required fields'
        },
        { status: 400 }
      );
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: 'Passwords do not match'
        },
        { status: 400 }
      );
    }

    // Check if buyer already exists
    const existingBuyer = await Buyer.findOne({ email });
    if (existingBuyer) {
      return NextResponse.json(
        {
          success: false,
          message: 'Buyer with this email already exists'
        },
        { status: 400 }
      );
    }

    // Create buyer
    const buyer = await Buyer.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      companyName,
      tradeLicense,
      companyType,
      industry,
      website,
      employeeCount,
      annualRevenueRange,
      address
    });

    // Generate tokens
    const token = generateToken(buyer._id, 'buyer');
    const refreshToken = generateRefreshToken(buyer._id, 'buyer');

    // Save refresh token to database
    buyer.refreshToken = refreshToken;
    await buyer.save();

    // Get public profile
    const buyerData = buyer.getPublicProfile();

    return NextResponse.json(
      {
        success: true,
        message: 'Buyer registered successfully',
        data: {
          buyer: buyerData,
          token,
          refreshToken
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error during signup',
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
