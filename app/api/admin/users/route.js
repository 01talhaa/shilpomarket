import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Supplier from '@/models/Supplier';
import Buyer from '@/models/Buyer';

export async function GET(request) {
  try {
    console.log('Admin users API called');
    await connectDB();
    console.log('Database connected');

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';
    const status = searchParams.get('status') || 'all';
    
    console.log('Query params:', { type, status });

    let suppliers = [];
    let buyers = [];

    if (type === 'all' || type === 'suppliers') {
      let query = {};
      if (status === 'pending') query.isApproved = false;
      if (status === 'approved') query.isApproved = true;
      
      console.log('Fetching suppliers with query:', query);
      suppliers = await Supplier.find(query)
        .select('-password -refreshToken')
        .sort({ createdAt: -1 })
        .lean();
      console.log(`Found ${suppliers.length} suppliers`);
    }

    if (type === 'all' || type === 'buyers') {
      buyers = await Buyer.find({})
        .select('-password -refreshToken')
        .sort({ createdAt: -1 })
        .lean();
      console.log(`Found ${buyers.length} buyers`);
    }

    const stats = {
      totalSuppliers: suppliers.length,
      totalBuyers: buyers.length,
      pendingSuppliers: suppliers.filter(s => !s.isApproved).length,
      approvedSuppliers: suppliers.filter(s => s.isApproved).length
    };

    console.log('Sending stats:', stats);
    console.log(`Fetched ${suppliers.length} suppliers and ${buyers.length} buyers`);
    
    return NextResponse.json(
      {
        success: true,
        suppliers,
        buyers,
        stats
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error'
      },
      { status: 500 }
    );
  }
}
