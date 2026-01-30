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
      address,
      interestedCategories
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

    // Check if supplier already exists
    const existingSupplier = await Supplier.findOne({ email });
    if (existingSupplier) {
      return NextResponse.json(
        {
          success: false,
          message: 'Supplier with this email already exists'
        },
        { status: 400 }
      );
    }

    // Create supplier
    const supplier = await Supplier.create({
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
      address,
      interestedCategories: interestedCategories || []
    });

    // Generate tokens
    const token = generateToken(supplier._id, 'supplier');
    const refreshToken = generateRefreshToken(supplier._id, 'supplier');

    // Save refresh token to database
    supplier.refreshToken = refreshToken;
    await supplier.save();

    // Get public profile
    const supplierData = supplier.getPublicProfile();

    return NextResponse.json(
      {
        success: true,
        message: 'Supplier registered successfully',
        data: {
          supplier: supplierData,
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
