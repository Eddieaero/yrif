import { useSelector } from 'react-redux';
import { BookOpen, Users, Trophy, TrendingUp, Clock, AlertCircle, LucideIcon } from 'lucide-react';
import { UserRole } from '../../types';
import { RootState } from '../../store/store';

interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
    bg: string;
}

const Overview = () => {
    const role = useSelector((state: RootState) => state.auth.role);

    const stats: Record<UserRole, Stat[]> = {
        student: [
            { label: 'My Submissions', value: '3', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Pending Reviews', value: '1', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
            { label: 'Upcoming Events', value: '2', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
        ],
        mentor: [
            { label: 'Assigned Mentees', value: '5', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Papers to Review', value: '4', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Feedback Given', value: '12', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ],
        admin: [
            { label: 'Total Users', value: '1,240', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Active Research', value: '86', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Pending Approvals', value: '15', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ]
    };

    const currentStats = stats[role] || stats.student;

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-display font-bold text-brand-navy">Dashboard Overview</h1>
                <p className="text-text-secondary mt-1">Welcome back, Sarah. Here&apos;s what&apos;s happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                                    <Icon className={stat.color} size={24} />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.color} ${stat.bg}`}>
                                    +12% this week
                                </span>
                            </div>
                            <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
                            <div className="text-text-secondary text-sm font-medium">{stat.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-brand-navy">Recent Activity</h2>
                        <button className="text-sm text-brand-blue font-medium hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-brand-teal shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-brand-navy">New research paper submitted by John Doe</p>
                                    <p className="text-xs text-text-secondary mt-1">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-brand-navy">Upcoming Deadlines</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white flex flex-col items-center justify-center text-xs font-bold text-orange-600 shadow-sm">
                                <span>DEC</span>
                                <span className="text-lg">15</span>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-brand-navy">Innovation Grant Application</div>
                                <div className="text-xs text-orange-600 font-medium">Closing soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
