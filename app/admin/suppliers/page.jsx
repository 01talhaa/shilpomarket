'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, CheckCircle, XCircle, Clock, Mail, Phone, Building, FileText, Calendar, Globe, Users } from 'lucide-react';
import { toast } from 'sonner';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export default function AdminSuppliersPage() {
  const router = useRouter();
  const [suppliers, setSuppliers] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, pending, approved
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const adminData = localStorage.getItem('admin');
    if (!adminData) {
      router.push('/admin/login');
      return;
    }
    
    fetchSuppliers();
  }, [router]);

  useEffect(() => {
    filterSuppliers();
  }, [searchTerm, filterStatus, suppliers]);

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      const adminToken = localStorage.getItem('adminToken');
      console.log('Fetching suppliers from:', `${API_BASE_URL}/api/admin/users?type=suppliers`);
      
      const response = await fetch(`${API_BASE_URL}/api/admin/users?type=suppliers`, {
        headers: {
          'Authorization': `Bearer ${adminToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API error:', response.status, errorData);
        throw new Error(errorData.message || 'Failed to fetch suppliers');
      }

      const data = await response.json();
      console.log('Received data:', data);
      console.log('Suppliers count:', data.suppliers?.length || 0);
      
      setSuppliers(data.suppliers || []);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      toast.error('Failed to load suppliers: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterSuppliers = () => {
    let filtered = [...suppliers];

    // Filter by status
    if (filterStatus === 'pending') {
      filtered = filtered.filter(s => !s.isApproved);
    } else if (filterStatus === 'approved') {
      filtered = filtered.filter(s => s.isApproved);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(s => 
        s.firstName?.toLowerCase().includes(term) ||
        s.lastName?.toLowerCase().includes(term) ||
        s.email?.toLowerCase().includes(term) ||
        s.companyName?.toLowerCase().includes(term) ||
        s.tradeLicense?.toLowerCase().includes(term)
      );
    }

    setFilteredSuppliers(filtered);
  };

  const handleApprove = async (supplierId) => {
    try {
      setProcessingId(supplierId);
      const adminToken = localStorage.getItem('adminToken');
      
      const response = await fetch(`${API_BASE_URL}/api/admin/suppliers/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          supplierId,
          action: 'approve',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to approve supplier');
      }

      toast.success('Supplier approved successfully');
      fetchSuppliers(); // Refresh the list
    } catch (error) {
      console.error('Error approving supplier:', error);
      toast.error('Failed to approve supplier');
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (supplierId) => {
    const reason = prompt('Enter rejection reason (optional):');
    
    try {
      setProcessingId(supplierId);
      const adminToken = localStorage.getItem('adminToken');
      
      const response = await fetch(`${API_BASE_URL}/api/admin/suppliers/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          supplierId,
          action: 'reject',
          reason: reason || 'Application rejected by admin',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to reject supplier');
      }

      toast.success('Supplier rejected');
      fetchSuppliers(); // Refresh the list
    } catch (error) {
      console.error('Error rejecting supplier:', error);
      toast.error('Failed to reject supplier');
    } finally {
      setProcessingId(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getStatusBadge = (supplier) => {
    if (supplier.isApproved) {
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Approved
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      );
    }
  };

  const pendingCount = suppliers.filter(s => !s.isApproved).length;
  const approvedCount = suppliers.filter(s => s.isApproved).length;

  return (
    <AdminLayout>
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Supplier Management</h1>
          <p className="text-gray-600 mt-2">Review and approve supplier applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Suppliers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{suppliers.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{pendingCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{approvedCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, company, or license..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                >
                  All ({suppliers.length})
                </Button>
                <Button
                  variant={filterStatus === 'pending' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending ({pendingCount})
                </Button>
                <Button
                  variant={filterStatus === 'approved' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('approved')}
                >
                  Approved ({approvedCount})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suppliers List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading suppliers...</p>
          </div>
        ) : filteredSuppliers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600">No suppliers found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredSuppliers.map((supplier) => (
              <Card key={supplier._id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {supplier.firstName} {supplier.lastName}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {supplier.companyName}
                      </CardDescription>
                    </div>
                    {getStatusBadge(supplier)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {/* Contact Information */}
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Email</p>
                        <p className="text-sm text-gray-600">{supplier.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Phone</p>
                        <p className="text-sm text-gray-600">{supplier.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Trade License</p>
                        <p className="text-sm text-gray-600">{supplier.tradeLicense}</p>
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Company Type</p>
                        <p className="text-sm text-gray-600 capitalize">{supplier.companyType}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Industry</p>
                        <p className="text-sm text-gray-600">{supplier.industry}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Employees</p>
                        <p className="text-sm text-gray-600">{supplier.employeeCount}</p>
                      </div>
                    </div>

                    {/* Website & Registration */}
                    {supplier.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Website</p>
                          <a 
                            href={supplier.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {supplier.website}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Registered</p>
                        <p className="text-sm text-gray-600">{formatDate(supplier.createdAt)}</p>
                      </div>
                    </div>

                    {supplier.approvedAt && (
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Approved On</p>
                          <p className="text-sm text-gray-600">{formatDate(supplier.approvedAt)}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  {supplier.address && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-1">Address</p>
                      <p className="text-sm text-gray-600">{supplier.address}</p>
                    </div>
                  )}

                  {/* Rejection Reason */}
                  {supplier.rejectionReason && (
                    <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-700 mb-1">Rejection Reason</p>
                      <p className="text-sm text-red-600">{supplier.rejectionReason}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {!supplier.isApproved && (
                    <div className="flex gap-3 pt-4 border-t">
                      <Button
                        onClick={() => handleApprove(supplier._id)}
                        disabled={processingId === supplier._id}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {processingId === supplier._id ? 'Processing...' : 'Approve'}
                      </Button>
                      <Button
                        onClick={() => handleReject(supplier._id)}
                        disabled={processingId === supplier._id}
                        variant="destructive"
                        className="flex-1"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {supplier.isApproved && (
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">This supplier has been approved and can now login</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
