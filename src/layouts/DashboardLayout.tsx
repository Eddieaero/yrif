import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, LogOut, Settings, Menu, Bell, Calendar, Award, BookOpen } from 'lucide-react';
import logo from '../assets/images/logo_dark.png';
import { UserRole } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setRole } from '../store/slices/authSlice';

const DashboardLayout = () => {
    // Redux State
    const role = useSelector((state: RootState) => state.auth.role);
    const dispatch = useDispatch();

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    const links = [
        { name: 'Overview', path: '/dashboard', icon: LayoutDashboard, roles: ['student', 'mentor', 'admin'] },
        { name: 'My Research', path: '/dashboard/research', icon: FileText, roles: ['student', 'mentor'] },
        { name: 'Research Portal', path: '/dashboard/research', icon: FileText, roles: ['admin'] },
        { name: 'Events', path: '/dashboard/events', icon: Calendar, roles: ['student', 'mentor', 'admin'] },
        { name: 'Mentorship', path: '/dashboard/mentorship', icon: Award, roles: ['student', 'mentor', 'admin'] },
        { name: 'Resources', path: '/dashboard/resources', icon: BookOpen, roles: ['student', 'mentor', 'admin'] },
        { name: 'User Management', path: '/dashboard/users', icon: Users, roles: ['admin'] },
        { name: 'Settings', path: '/dashboard/settings', icon: Settings, roles: ['student', 'mentor', 'admin'] },
    ];

    const currentLinks = links.filter(link => link.roles.includes(role));

    const toggleRole = () => {
        const roles: UserRole[] = ['student', 'mentor', 'admin'];
        const nextIndex = (roles.indexOf(role) + 1) % roles.length;
        dispatch(setRole(roles[nextIndex]));
    };

    // Mobile Overlay
    const MobileOverlay = () => (
        <div
            className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setSidebarOpen(false)}
        />
    );

    return (
        <div className="flex h-screen bg-brand-light/50 font-sans text-brand-navy overflow-hidden">
            <MobileOverlay />

            {/* Sidebar */}
            <aside className={`
                fixed md:relative z-30 h-full
                bg-white border-r border-gray-200 flex flex-col
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-20'}
            `}>
                <div className="h-16 flex items-center justify-center border-b border-gray-100 p-4">
                    <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                        <img src={logo} alt="YRIF" className="h-8 w-auto shrink-0" />
                        <span className={`font-bold text-lg tracking-tight transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                            Dashboard
                        </span>
                    </div>
                </div>

                <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                    {currentLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => window.innerWidth < 768 && setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group whitespace-nowrap ${isActive
                                    ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20'
                                    : 'text-text-secondary hover:bg-brand-light hover:text-brand-navy'
                                    }`}
                                title={!isSidebarOpen ? link.name : ''}
                            >
                                <Icon size={20} className={`shrink-0 ${isActive ? 'text-brand-teal' : 'group-hover:text-brand-navy'}`} />
                                <span className={`font-medium text-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors whitespace-nowrap">
                        <LogOut size={20} className="shrink-0" />
                        <span className={`font-medium text-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                            Logout
                        </span>
                    </button>

                    {/* Role Toggler for Demo */}
                    <div
                        className={`mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-800 cursor-pointer overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}
                        onClick={toggleRole}
                    >
                        <div className="font-bold uppercase tracking-wider mb-1">Current Role:</div>
                        <div className="flex items-center justify-between">
                            <span className="capitalize font-mono text-sm">{role}</span>
                            <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-blue-100">Click to switch</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-brand-navy transition-colors">
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer">
                            <Bell size={20} className="text-gray-400 hover:text-brand-navy transition-colors" />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
                        </div>

                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right hidden md:block">
                                <div className="text-sm font-bold text-brand-navy">Sarah Johnson</div>
                                <div className="text-xs text-gray-500 capitalize">{role}</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-navy font-bold border border-gray-200 overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=0F172A&color=fff" alt="Profile" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    <Outlet context={{ role }} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
