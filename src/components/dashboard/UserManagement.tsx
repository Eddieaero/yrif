import { useState } from 'react';
import { Search, Filter, MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';

const UserManagement = () => {
    const [users] = useState([
        { id: 1, name: 'Alice Smith', role: 'Student', institution: 'UDSM', status: 'Active', date: '2024-03-10' },
        { id: 2, name: 'Dr. John Doe', role: 'Mentor', institution: 'SUA', status: 'Active', date: '2024-03-08' },
        { id: 3, name: 'Michael Brown', role: 'Student', institution: 'IFM', status: 'Pending', date: '2024-03-12' },
        { id: 4, name: 'Sarah Wilson', role: 'Researcher', institution: 'NIMR', status: 'Active', date: '2024-02-28' },
        { id: 5, name: 'James Lee', role: 'Student', institution: 'DIT', status: 'Rejected', date: '2024-03-01' },
    ]);

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-brand-navy">User Management</h1>
                    <p className="text-text-secondary text-sm">Manage platform members and permissions</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="px-4 py-2 bg-brand-navy text-white rounded-lg text-sm font-medium hover:bg-brand-dark shadow-lg shadow-brand-navy/20">
                        Add User
                    </button>
                </div>
            </div>

            {/* Search and Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Institution</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-brand-navy">{user.name}</div>
                                        <div className="text-xs text-gray-400">{'user@example.com'}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                            ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                                                user.role === 'Mentor' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{user.institution}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {user.status === 'Active' && <CheckCircle size={14} className="text-green-500" />}
                                            {user.status === 'Pending' && <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />}
                                            {user.status === 'Rejected' && <XCircle size={14} className="text-red-500" />}
                                            <span className={`text-xs font-medium ${user.status === 'Active' ? 'text-green-700' :
                                                user.status === 'Pending' ? 'text-orange-700' : 'text-red-700'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{user.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-brand-navy p-1 rounded hover:bg-gray-100">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
