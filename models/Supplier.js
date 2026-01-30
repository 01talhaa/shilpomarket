import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const supplierSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  
  // Company Information
  companyName: {
    type: String,
    trim: true
  },
  tradeLicense: {
    type: String,
    trim: true
  },
  companyType: {
    type: String,
    enum: ['pvt_ltd', 'pub_ltd', 'partner', 'sole_prop', 'coop', 'other', 'private_limited', 'public_limited', 'partnership', 'sole_proprietorship', 'cooperative', ''],
    default: ''
  },
  industry: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  employeeCount: {
    type: String,
    trim: true
  },
  
  // Address
  address: {
    type: String,
    trim: true
  },
  
  // Categories (stored as numeric IDs from hardcoded data)
  interestedCategories: [{
    type: Number
  }],
  
  // Profile Image
  profileImage: {
    url: String,
    publicId: String
  },
  
  // Account Status
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  approvedAt: Date,
  rejectionReason: String,
  
  // Tokens
  refreshToken: {
    type: String,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  
  // Metadata
  lastLogin: Date
}, {
  timestamps: true
});

// Encrypt password before saving
supplierSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password
supplierSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Get public profile
supplierSchema.methods.getPublicProfile = function() {
  const supplier = this.toObject();
  delete supplier.password;
  delete supplier.refreshToken;
  delete supplier.resetPasswordToken;
  delete supplier.resetPasswordExpire;
  return supplier;
};

export default mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);
