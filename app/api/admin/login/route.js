import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Admin from '@/models/Admin';
import { generateToken, generateRefreshToken } from '@/lib/tokenUtils';

export async function POST(request) {
  try {
    console.log('Admin login attempt...');
    await connectDB();

    const body = await request.json();
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

    // Find admin and include password
    let admin = await Admin.findOne({ email }).select('+password');

    // If admin doesn't exist and credentials match the default, create it
    if (!admin && email === 'shilpomarket@gmail.com' && password === 'shilpomarket-admin') {
      console.log('Creating default admin account...');
      admin = await Admin.create({
        email: 'shilpomarket@gmail.com',
        password: 'shilpomarket-admin',
        name: 'ShilpoMarket Admin',
        role: 'admin'
      });
      // Fetch with password for verification
      admin = await Admin.findOne({ email }).select('+password');
    }

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials'
        },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials'
        },
        { status: 401 }
      );
    }

    // Generate tokens
    const token = generateToken(admin._id, 'admin');
    const refreshToken = generateRefreshToken(admin._id, 'admin');

    // Update last login
    admin.lastLogin = Date.now();
    await admin.save();

    // Return admin data without password
    const adminData = {
      _id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          admin: adminData,
          token,
          refreshToken
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error during login'
      },
      { status: 500 }
    );
  }
}
